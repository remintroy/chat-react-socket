import { Box, Grid, IconButton, Paper, TextField, Toolbar } from "@mui/material";
import UsersListComponent from "../../components/UserList";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import SearchComponent from "../../components/SearchUser";
import ChatBoxComponent from "../../components/ChatBox";

const HomePage = () => {
  const arr = Array(20).fill(`${Math.random() * 10000}`);
  const [usersList, setUsersList] = useState<string[]>(arr);
  const theme: any = useTheme();

  return (
    <div className="HomePage" style={{ height: "100%", position: "absolute", bottom: "0", right: 0, left: 0, top: 0 }}>
      <Grid container height={"100%"}>
        <Grid item xs={3} height={"100%"}>
          <SearchComponent />
          <Box
            sx={{
              height: "100%",
              overflowX: "hidden",
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
          >
            <UsersListComponent data={usersList} />
            <Toolbar
              disableGutters
              style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                backgroundColor: theme.palette.background.paper,
                padding: "0px 15px",
              }}
            >
              Yesterday
            </Toolbar>
            <UsersListComponent data={usersList} />
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
