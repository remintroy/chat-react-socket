import { Avatar, Badge, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";

const UserListComponentItem = ({ index }: { index: number }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText sx={{ flexGrow: 100 }}>
          <Typography fontWeight="bold">Remin T Roy {index}</Typography>
          <Typography variant="caption">hasddddd safa af sdf asfd adf i</Typography>
        </ListItemText>
        <ListItemText sx={{ textAlign: "end" }}>
          <Typography color="green" variant="caption" component={"div"}>online</Typography>
          <Badge badgeContent={4} color="secondary" sx={{ mr: "15px" }} />
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

const UsersListComponent = ({ data }: { data: string[] }) => {
  return (
    <List sx={{}}>
      {data.map((uid, index) => {
        return <UserListComponentItem key={uid} index={index + 1} />;
      })}
    </List>
  );
};

export default UsersListComponent;
