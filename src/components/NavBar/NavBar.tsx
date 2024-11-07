import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            Keypad example
          </Typography>
          <Button
            color="inherit"
            variant="text"
            sx={{ mb: 1 }}
            component={NavLink}
            to={"/access-keypad"}
          >
            Access keypad
          </Button>
          <Button
            color="inherit"
            variant="text"
            sx={{ mb: 1 }}
            component={NavLink}
            to={"/calculator"}
          >
            Calculator
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
