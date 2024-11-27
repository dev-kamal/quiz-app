// Created By Kamal

// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Helpers Imports
import AppUtils from "../../utils/AppUtils";
import resultviewStyle from "./resultview.style";

// Type Definitions for Props
interface ResultViewProps {
  handleTryAgain: () => void;
  handleCheckYourAnswer: () => void;
  answer: (boolean | undefined)[];
  timeSpent: number;
}

const ResultView = (props: ResultViewProps) => {
  // Props
  const { handleTryAgain, handleCheckYourAnswer, answer, timeSpent } = props;

  // Functions
  const getCounts = (
    array: (boolean | undefined)[]
  ): { trueCount: number; falseCount: number; undefinedCount: number } => {
    return array.reduce(
      (counts, item) => {
        if (item === true) counts.trueCount++;
        else if (item === false) counts.falseCount++;
        else if (item === undefined) counts.undefinedCount++;
        return counts;
      },
      { trueCount: 0, falseCount: 0, undefinedCount: 0 }
    );
  };

  const calculatePercentage = (correctCount: number, total: number): number => {
    return total > 0 ? (correctCount / total) * 100 : 0;
  };

  const { trueCount, falseCount }: any = getCounts(answer);
  const percentage = calculatePercentage(trueCount, 10);

  const resultData = [
    { label: "Time Spent:", value: AppUtils.formatTime(timeSpent) },
    { label: "Attempted:", value: `${trueCount + falseCount}` },
    { label: "Not Attempted:", value: `${10 - (trueCount + falseCount)}` },
    { label: "Correct Answer:", value: `${trueCount}` },
    { label: "Wrong Answer:", value: `${10 - trueCount}` },
  ];

  return (
    <Box sx={resultviewStyle.mainBox}>
      <Typography variant="h4" align="center" sx={resultviewStyle.txtStylOne}>
        Result:
      </Typography>
      <Typography variant="h5" align="center" sx={resultviewStyle.txtStylTwo}>
        {trueCount} of 10
      </Typography>
      <Typography variant="h4" align="center" sx={resultviewStyle.txtStylOne}>
        {percentage.toFixed()}%
      </Typography>
      {resultData.map(({ label, value }) => (
        <Typography
          variant="h5"
          align="center"
          sx={resultviewStyle.txtStylTwo}
          key={label}
        >
          {label} {value}
        </Typography>
      ))}
      <Box sx={resultviewStyle.btnBox}>
        <Button
          variant="outlined"
          color="info"
          sx={resultviewStyle.reviewBtn}
          onClick={handleCheckYourAnswer}
        >
          Review Answers
        </Button>
        <Button
          variant="contained"
          sx={resultviewStyle.tryBtn}
          onClick={handleTryAgain}
        >
          Try Again
        </Button>
      </Box>
    </Box>
  );
};

export default ResultView;
