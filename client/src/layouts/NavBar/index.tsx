import { Box,} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import { useTheme } from "@emotion/react";


const NavBarLayout = () => {
  
  return (
    <div className="NavBarLayout">
      <Box sx={{ flexGrow: 1 }}>
        <div className="MainApp" style={{ position: "fixed", bottom: "0", top: "0px", width: "100%" }}>
          <Outlet />
        </div>
      </Box>
    </div>
  );
};

export default NavBarLayout;
