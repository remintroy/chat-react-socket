import { useTheme } from "@emotion/react";
import { Box, Toolbar } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const MessageCompnentList = ({ isMe, message }: { isMe: boolean; message: string }) => {
  const theme: any = useTheme();
  const { dark } = useContext(ThemeContext);
  const messageStyle = {
    padding: "10px 20px",
    backgroundColor: dark ? theme.palette.secondary.dark : theme.palette.secondary.light,
    borderRadius: isMe ? "10px 0 10px 10px" : "0 10px 10px 10px",
    maxWidth: "70%",
  };

  return (
    <Box display={"flex"} justifyContent={isMe ? "end" : "start"} alignItems={"center"}>
      <div style={messageStyle}>{message}</div>
    </Box>
  );
};

const ChatSubComponent = () => {
  const theme: any = useTheme();

  return (
    <Box
      sx={{
        overflowX: "hidden",
        top: "65px",
        left: 0,
        right: 0,
        bottom: "85px",
        position: "absolute",
        "::-webkit-scrollbar": {
          width: "5px",
        },
        "::-webkit-scrollbar-track": {
          background: theme.palette.action.hover,
        },
        "::-webkit-scrollbar-thumb": {
          background: theme.palette.action.selected,
        },
      }}
      p="20px"
    >
      <MessageCompnentList isMe message="Haai" />
      <MessageCompnentList isMe={false} message="Haai" />
    </Box>
  );
};

export default ChatSubComponent;
