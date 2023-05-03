import { useTheme } from "@emotion/react";
import { EmojiEmotions, Send } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import TopToolBarComponent from "./TopTools";
import BottomInputsToolComponent from "./BottomInputs";
import ChatSubComponent from "./Chat";

const ChatBoxComponent = () => {
  const theme: any = useTheme();

  return (
    <>
      <TopToolBarComponent />
      <ChatSubComponent/>
     
      <BottomInputsToolComponent />
    </>
  );
};

export default ChatBoxComponent;
