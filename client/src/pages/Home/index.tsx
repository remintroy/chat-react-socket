import { Box, Grid, IconButton, Paper, TextField, Toolbar } from "@mui/material";
import UsersListComponent from "../../components/UserList";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import SearchComponent from "../../components/SearchUser";
import ChatBoxComponent from "../../components/ChatBox";
import { useAppSelector } from "../../lib/redux/hoots";

const HomePage = () => {
  const arr = Array(20).fill(`${Math.random() * 10000}`);
  const [usersList, setUsersList] = useState<string[]>(arr);
  const theme: any = useTheme();

  const user: any = useAppSelector((state) => state.user.data);

  return (
    <div className="HomePage" style={{ height: "100%", position: "absolute", bottom: "0", right: 0, left: 0, top: 0 }}>
      <Grid container height={"100%"}>
        <Grid item xs={3} height={"100%"}>
          <SearchComponent />
          <Box
            sx={{
              borderRight: `1px solid ${theme.palette.action.hover}`,
              height: "100%",
              overflowX: "hidden",
              "::-webkit-scrollbar": {
                width: "3px",
              },
              "::-webkit-scrollbar-track": {
                background: theme.palette.action.hover,
              },
              "::-webkit-scrollbar-thumb": {
                background: theme.palette.action.selected,
              },
            }}
          >
            <UsersListComponent data={user?.friends ?? []} />
          </Box>
        </Grid>
        <Grid xs={9} item sx={{ position: "relative" }}>
          <ChatBoxComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
