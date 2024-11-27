// Created By Kamal

// MUI Imports
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Styles Imports
import headerStyle from "./header.style";

const Header = () => {
  return (
    <Box sx={headerStyle.mainHeaderBox}>
      <Typography variant="h5" sx={headerStyle.headerTxt}>
        Quiz App
      </Typography>
      <Box sx={headerStyle.headerRight}>
        <Avatar alt="Remy Sharp" src="/images/1.png" />
        <Box sx={headerStyle.headerBx}>
          <Typography variant="subtitle1" sx={headerStyle.headerHeadTxt}>
            John Doe
          </Typography>
          <Typography variant="subtitle2" sx={headerStyle.headerSubTxt}>
            9429939614
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
