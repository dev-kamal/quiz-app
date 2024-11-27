// Created By Kamal

// React Imports
import { useEffect } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";

// Helper Imports
import AppUtils from "../../utils/AppUtils";

// TypeScript Type Definitions
interface TimerProps {
  handleSubmit: () => void;
  timeSpent: number;
  setTimeSpent: React.Dispatch<React.SetStateAction<number>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  currentView: "Welcome" | "Quiz" | "Result" | "Review";
}

const Timer = (props: TimerProps) => {
  const { handleSubmit, timeSpent, timeLeft, setTimeLeft, currentView } = props;

  useEffect(() => {
    if (currentView !== "Review") {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentView, handleSubmit, setTimeLeft]);

  const displayTime = currentView === "Review" ? timeSpent : timeLeft;

  return (
    <Typography sx={{ lineHeight: "1.1", fontSize: "1.5rem", fontWeight: 600 }}>
      {AppUtils.formatTime(displayTime)}
    </Typography>
  );
};

export default Timer;
