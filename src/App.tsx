// Created By Kamal

// MUI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Components Imports
import Header from "./components/header";
import QuizCard from "./components/quizCard";

// Style Imports
import appStyle from "./App.style";

const App = () => {
  return (
    <Box sx={appStyle.mainBox}>
      <Container>
        <Header />
        <QuizCard />
      </Container>
    </Box>
  );
};

export default App;
