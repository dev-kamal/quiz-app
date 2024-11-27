// Created By Kamal

// React Imports
import { useCallback } from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

// Components Imports
import Timer from "../timer";
import questions from "../../helpers/constantHelper";

// Helper Imports
import ColorsHelper from "../../helpers/colorHelper";
import quizviewStyle from "./quizview.style";

// TypeScript Type Definitions
interface QuestionViewProps {
  setAnswer: React.Dispatch<React.SetStateAction<boolean[]>>;
  currentQIndex: number;
  setCurrentQIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedOption: number[];
  setSelectedOption: React.Dispatch<React.SetStateAction<number[]>>;
  currentView: "Welcome" | "Quiz" | "Result" | "Review";
  setCurrentView: React.Dispatch<
    React.SetStateAction<"Welcome" | "Quiz" | "Result" | "Review">
  >;
  timeSpent: number;
  setTimeSpent: React.Dispatch<React.SetStateAction<number>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionView = (props: QuestionViewProps) => {
  // Props & Consts
  const {
    setAnswer,
    currentQIndex,
    setCurrentQIndex,
    selectedOption,
    setSelectedOption,
    currentView,
    setCurrentView,
    timeSpent,
    setTimeSpent,
    setOpenModal,
    handleSubmit,
    timeLeft,
    setTimeLeft,
  } = props;

  const prefixes = ["A. ", "B. ", "C. ", "D. "];

  // Functions
  const handleNext = useCallback(() => {
    if (currentQIndex < 9) {
      setCurrentQIndex((prev) => prev + 1);
    } else if (currentView === "Quiz") {
      setOpenModal(true);
    } else if (currentView === "Review") {
      handleSubmit();
    }
  }, [
    currentQIndex,
    currentView,
    handleSubmit,
    setCurrentQIndex,
    setOpenModal,
  ]);

  const handleDirectSubmit = useCallback(() => {
    currentView !== "Review" ? setOpenModal(true) : setCurrentView("Result");
  }, [currentView, setOpenModal, setCurrentView]);

  const handlePrev = useCallback(() => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  }, [currentQIndex, setCurrentQIndex]);

  const handleSelectOption = useCallback(
    (optIndex: number) => {
      if (currentView !== "Review") {
        setSelectedOption((prev) => {
          const updatedSelection = [...prev];
          updatedSelection[currentQIndex] = optIndex;
          return updatedSelection;
        });

        const isCorrect = questions[currentQIndex].correctAnswer === optIndex;
        setAnswer((prev) => {
          const updatedAnswers = [...prev];
          updatedAnswers[currentQIndex] = isCorrect;
          return updatedAnswers;
        });
      }
    },
    [currentQIndex, currentView, setAnswer, setSelectedOption]
  );

  const settings = {
    width: 220,
    height: 220,
  };

  return (
    <>
      <CardContent sx={quizviewStyle.mainBox}>
        <Box sx={quizviewStyle.subBox}>
          <Box sx={quizviewStyle.subLeftBx}>
            <AccessTimeIcon
              fontSize="large"
              sx={{ color: ColorsHelper.primary }}
            />
            <Box>
              <Typography variant="subtitle2" sx={quizviewStyle.timeSpentTxt}>
                Time {currentView === "Review" ? "Spent" : "Remaining"}
              </Typography>
              <Timer
                currentView={currentView}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                handleSubmit={handleSubmit}
                timeSpent={timeSpent}
                setTimeSpent={setTimeSpent}
              />
            </Box>
          </Box>

          <Button sx={quizviewStyle.submitBtn} onClick={handleDirectSubmit}>
            Submit
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ py: { xs: 5, md: 9 } }}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
              Question {currentQIndex + 1} of {questions.length}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
              {`${currentQIndex + 1}. ${questions[currentQIndex]?.question}`}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {questions[currentQIndex]?.options.map((opt, i) => (
                  <Grid
                    key={i}
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      border: `2px solid ${
                        currentView === "Review"
                          ? selectedOption[currentQIndex] ===
                              questions[currentQIndex].correctAnswer &&
                            i === selectedOption[currentQIndex]
                            ? ColorsHelper.primary
                            : selectedOption[currentQIndex] === i
                            ? ColorsHelper.red
                            : i === questions[currentQIndex].correctAnswer
                            ? ColorsHelper.primary
                            : ColorsHelper.lightGray
                          : selectedOption[currentQIndex] === i
                          ? ColorsHelper.primary
                          : ColorsHelper.lightGray
                      }`,
                      bgcolor:
                        currentView === "Review"
                          ? i === questions[currentQIndex].correctAnswer
                            ? ColorsHelper.secondary
                            : selectedOption[currentQIndex] === i
                            ? "rgba(255, 0, 0, 0.1)"
                            : "transparent"
                          : selectedOption[currentQIndex] === i
                          ? ColorsHelper.secondary
                          : "transparent",
                      borderRadius: 2,
                      p: 1,
                      cursor: currentView === "Review" ? "default" : "pointer",
                    }}
                    onClick={() =>
                      currentView !== "Review" && handleSelectOption(i)
                    }
                  >
                    {prefixes[i] + opt}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Gauge Section */}
          <Grid size={{ xs: 12, md: 4 }} sx={quizviewStyle.guageGrid}>
            <Box sx={quizviewStyle.guageBx}>
              <Gauge
                {...settings}
                cornerRadius="50%"
                value={currentQIndex + 1}
                startAngle={360}
                endAngle={0}
                innerRadius="80%"
                outerRadius="100%"
                text={({ value }) => `${value} / 10`}
                valueMax={questions.length}
                sx={() => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: ColorsHelper.primary,
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: ColorsHelper.secondary,
                  },
                })}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={quizviewStyle.cardAct}>
        <Button
          sx={quizviewStyle.prevBtn}
          disabled={currentQIndex === 0}
          variant="outlined"
          onClick={handlePrev}
        >
          Prev
        </Button>
        {Array.from({ length: 10 }, (_, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => setCurrentQIndex(index)} // Set index of clicked button
            sx={{
              ...quizviewStyle.numBtn,
              backgroundColor: currentQIndex === index ? ColorsHelper.secondary : "transparent", // Highlight active question
            }}
          >
            {index + 1} {/* Display question number */}
          </Button>
        ))}
        <Button
          sx={quizviewStyle.nextBtn}
          variant="contained"
          onClick={handleNext}
        >
          {currentQIndex === 9 && currentView !== "Review" ? "Submit" : "Next"}
        </Button>
      </CardActions>
    </>
  );
};

export default QuestionView;
