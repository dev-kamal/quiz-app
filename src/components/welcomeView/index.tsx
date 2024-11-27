// Created By Kamal

// React Imports
import { useCallback } from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Styles Imports
import welcomeStyle from "./welcome.style";

interface WelcomeViewProps {
  setCurrentView: (view: "Welcome" | "Quiz" | "Result" | "Review") => void;
}

const WelcomeView: React.FC<WelcomeViewProps> = ({ setCurrentView }) => {
  
  // Functions
  const handleStartQuiz = useCallback(() => {
    setCurrentView("Quiz");
  }, [setCurrentView]);

  return (
    <Box sx={welcomeStyle.mainBox}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 600 }}>
        Welcome to Javascript Quiz
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={welcomeStyle.wlcSubTxt}
      >
        Check your skill by giving mcq test in our quiz app. Here in this quiz
        app cover all basic and fundamentals of Javascript. Click on start quiz
        button to start Javascript Quiz.
      </Typography>
      <Box sx={welcomeStyle.wlcBtnBx}>
        <Button
          variant="outlined"
          color="info"
          sx={welcomeStyle.wlcBtn}
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeView;
