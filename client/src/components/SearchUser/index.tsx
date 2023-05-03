import { useTheme } from "@emotion/react";
import { Search } from "@mui/icons-material";
import { TextField, Toolbar } from "@mui/material";

const SearchComponent = () => {
  const theme: any = useTheme();
  return (
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
    </Toolbar>
  );
};

export default SearchComponent;
