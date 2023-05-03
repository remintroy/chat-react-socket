import { useTheme } from "@emotion/react";
import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

const TopToolBarComponent = () => {
  const theme: any = useTheme();
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.action.disabledBackground}`,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: "20",
        }}
      >
        <Avatar src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png" />
        <Box ml="20px" sx={{ flexGrow: "1" }}>
          <Typography variant="h6" m="0" component="div">
            SOooi Jio 4
          </Typography>
          <Typography variant="caption" component="div" lineHeight={1}>
            online
          </Typography>
        </Box>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Toolbar>
      <Toolbar />
    </>
  );
};

export default TopToolBarComponent;
