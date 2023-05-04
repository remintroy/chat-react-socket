import { useTheme } from "@emotion/react";
import { Box, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const MessageCompnentList = ({ isMe, message }: { isMe: boolean; message: string }) => {
  const theme: any = useTheme();
  const { dark } = useContext(ThemeContext);
  const messageStyle = {
    padding: "10px 20px",
    backgroundColor: isMe
      ? dark
        ? theme.palette.primary.dark
        : theme.palette.primary.light
      : dark
      ? theme.palette.action.hover
      : theme.palette.action.hover,
    borderRadius: isMe ? "10px 0 10px 10px" : "0 10px 10px 10px",
    maxWidth: "70%",
  };

  return (
    <Box display={"flex"} mt={2} justifyContent={isMe ? "end" : "start"} alignItems={"center"}>
      <div style={messageStyle}>
        <Typography>{message}</Typography>
        <Typography component={"div"} variant="caption" textAlign={"end"}>
          10:35 pm
        </Typography>
      </div>
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
      
      <MessageCompnentList
        isMe
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iste ea doloremque minima distinctio soluta explicabo temporibus. Fugiat excepturi esse ratione optio, nobis explicabo laboriosam quos aut hic? Corporis, quam.
        Commodi, dolore adipisci? Placeat in possimus aut rem quia porro, inventore consequuntur explicabo provident amet magnam, qui, incidunt cum eligendi obcaecati facere ad quasi animi! Exercitationem earum accusantium voluptatem tempore!"
      />
      <MessageCompnentList
        isMe={false}
        message="Consectetur adipisicing elit. Dolorem iste ea doloremque minima distinctio soluta explicabo temporibus. Fugiat excepturi esse ratione optio, nobis explicabo laboriosam quos aut hic? Corporis, quam.
        Commodi, dolore adipisci? Placeat in possimus aut rem quia porro, inventore consequuntur explicabo provident amet magnam, qui, incidunt cum eligendi obcaecati facere ad quasi animi! Exercitationem earum accusantium voluptatem tempore!"
      />
    </Box>
  );
};

export default ChatSubComponent;
