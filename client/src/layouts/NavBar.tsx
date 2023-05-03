import { AppBar, Box, Button, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { useTheme } from "@emotion/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const NavBarLayout = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const theme: any = useTheme();

  return (
    <div className="NavBarLayout">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar
          sx={{
            boxShadow: "none",
            borderBottom: `1px solid ${theme.palette.action.disabledBackground}`,
            backgroundColor: theme.palette.background.default,
            zIndex: "20",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          <IconButton sx={{ mr: "20px" }} color="inherit" onClick={() => toggleTheme()}>
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
        <Toolbar />
        <div className="MainApp" style={{ position: "fixed", bottom: "0", top: "65px", width: "100%" }}>
          <Outlet />
        </div>
      </Box>
    </div>
  );
};

export default NavBarLayout;
