import { useTheme } from "@emotion/react";
import { EmojiEmotions, Send } from "@mui/icons-material";
import { Button, IconButton, TextField, Toolbar } from "@mui/material";

const BottomInputsToolComponent = () => {
  const theme: any = useTheme();
  return (
    <Toolbar
      sx={{
        position: "absolute",
        bottom: "20px",
        left: 0,
        right: 0,
        borderTop: `1px solid ${theme.palette.action.disabledBackground}`,
      }}
    >
      <IconButton sx={{ mr: "15px" }}>
        <EmojiEmotions />
      </IconButton>
      <TextField placeholder="Type your message here..." autoFocus size="small" fullWidth />
      <Button sx={{ ml: "15px" }} variant="contained">
        <Send />
      </Button>
    </Toolbar>
  );
};

export default BottomInputsToolComponent;
