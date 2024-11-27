// React Imports
import { useState, lazy, Suspense, useCallback } from "react";

// MUI Imports
import Card from "@mui/material/Card";

// Components Imports
import ResultView from "../resultView";
import QuestionView from "../questionView";
import WelcomeView from "../welcomeView";
import quizcardStyle from "./quizcard.style";

// Lazy Load Imports
const CustomizedDialogs = lazy(() => import("../customModal"));

const QuizCard = () => {
  // States & Consts
  const initialTime = 600;
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [answer, setAnswer] = useState<boolean[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentView, setCurrentView] = useState<
    "Welcome" | "Quiz" | "Result" | "Review"
  >("Welcome");

  // Functions
  const handleTryAgain = useCallback(() => {
    setAnswer([]);
    setSelectedOption([]);
    setCurrentQIndex(0);
    setTimeSpent(0);
    setTimeLeft(initialTime);
    setCurrentView("Quiz");
  }, [initialTime]);

  const handleCheckYourAnswer = useCallback(() => {
    setCurrentQIndex(0);
    setCurrentView("Review");
  }, []);

  const handleSubmit = useCallback(() => {
    if (currentView !== "Review") {
      setTimeSpent(initialTime + 1 - timeLeft);
    }
    setCurrentView("Result");
    setOpenModal(false);
  }, [currentView, initialTime, timeLeft]);

  return (
    <Card sx={quizcardStyle.mainCardBox}>
      {currentView === "Welcome" ? (
        <WelcomeView setCurrentView={setCurrentView} />
      ) : currentView === "Result" ? (
        <ResultView
          answer={answer}
          handleTryAgain={handleTryAgain}
          handleCheckYourAnswer={handleCheckYourAnswer}
          timeSpent={timeSpent}
        />
      ) : (
        <QuestionView
          setAnswer={setAnswer}
          currentQIndex={currentQIndex}
          setCurrentQIndex={setCurrentQIndex}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          currentView={currentView}
          setCurrentView={setCurrentView}
          timeSpent={timeSpent}
          setTimeSpent={setTimeSpent}
          setOpenModal={setOpenModal}
          handleSubmit={handleSubmit}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      )}

      {openModal && (
        <Suspense fallback={<></>}>
          <CustomizedDialogs
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleSubmit={handleSubmit}
          />
        </Suspense>
      )}
    </Card>
  );
};

export default QuizCard;