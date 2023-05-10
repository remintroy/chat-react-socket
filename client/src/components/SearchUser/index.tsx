import { useTheme } from "@emotion/react";
import { Search, Add, MoreVert } from "@mui/icons-material";
import { IconButton, TextField, Button, Toolbar, Typography, Modal, Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const TopToolBar = () => {
  const theme: any = useTheme();
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <Toolbar
      sx={{
        boxShadow: "none",
        borderRight: `1px solid ${theme.palette.action.disabledBackground}`,
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
      <Link className="link" to="/login">
        <Button color="inherit" variant="outlined">
          Login
        </Button>
      </Link>
    </Toolbar>
  );
};

const SearchUserComponet = ({ show, setShow }: { show: boolean; setShow: any }) => {
  const theme: any = useTheme();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 600,
    bgcolor: "background.paper",
    border: `2px solid ${theme.palette.action.disabledBackground}`,
    borderRadius: "5px",
    color: theme.palette.text.primary,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal open={show} onClose={() => setShow(false)} aria-labelledby="Add User" aria-describedby="Add new public user as frnt">
      <Box sx={style}>
        <TextField placeholder="Search users" fullWidth />
      </Box>
    </Modal>
  );
};

const SearchComponent = () => {
  const theme: any = useTheme();
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <>
      <TopToolBar />
      <Toolbar
        disableGutters
        style={{
          position: "relative",
          top: 0,
          zIndex: 10,
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.action.disabledBackground}`,
          borderBottom: `1px solid ${theme.palette.action.disabledBackground}`,
          padding: "0px 15px",
        }}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Search here"
          InputProps={{
            startAdornment: <Search fontSize="small" sx={{ mr: "10px" }} />,
          }}
        />
        <IconButton onClick={() => setOpenSearchModal(true)} sx={{ ml: "15px" }}>
          <Add />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Toolbar>
      <SearchUserComponet show={openSearchModal} setShow={setOpenSearchModal} />
    </>
  );
};

export default SearchComponent;
