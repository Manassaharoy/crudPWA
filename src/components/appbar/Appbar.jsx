import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  ExploreOutlined,
  FavoriteBorderOutlined,
  AccountCircleOutlined
} from "@mui/icons-material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Link } from "react-router-dom";

const StyledFabBottom = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});
const StyledFabTop = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: 40,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const styledFabDesign = {
  backgroundColor: "error.main",
  "&:hover": {
  backgroundColor: "secondary.main",
  }
}

const redWhite = {
  bgcolor: "primary.main",
};

const icon = {
  color: "white.main",
  fontSize: "1.8rem",
};

const iconStyle = {
  color: "warning.main",
  transition: ".2s ease-in-out",
  "&:hover": {
    bgcolor: "warning.main",
    color: "primary.main",
    padding: "1rem",
    borderRadius: "15px",
  },
};

const removeTextDecoration = {
  textDecoration: "none",
};

export default function Appbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: { xs: "0", md: "2rem" } }}>
      <AppBar
        value={value}
        onChange={handleChange}
        position="fixed"
        sx={{
          p: "1rem",
          top: { xs: "auto", md: 0 },
          bottom: { xs: 0, md: "auto" },
        }}
      >
        <BottomNavigation value={value} onChange={handleChange} sx={redWhite}>
          <BottomNavigationAction
            icon={
              <Link to="/" style={removeTextDecoration}>
                <Box sx={iconStyle}>
                  <HomeOutlined sx={icon} />
                  <Typography>Home</Typography>
                </Box>
              </Link>
            }
          />
          <BottomNavigationAction
            icon={
              <Link to="/auth" style={removeTextDecoration}>
                <Box sx={iconStyle}>
                  <ExploreOutlined sx={icon} />
                  <Typography>Explore</Typography>
                </Box>
              </Link>
            }
          />
          <BottomNavigationAction
            icon={
              <StyledFabBottom sx={styledFabDesign}>
                <AddAPhotoOutlinedIcon sx={icon} />
              </StyledFabBottom>
            }
            sx={{
              display: { md: "none" },
            }}
          />
          <BottomNavigationAction
            icon={
              <StyledFabTop sx={styledFabDesign}>
                <AddAPhotoOutlinedIcon sx={icon} />
              </StyledFabTop>
            }
            sx={{
              display: { xs: "none", md:"block" },
            }}
          />
          <BottomNavigationAction
            icon={
              <Link to="/page3" style={removeTextDecoration}>
                <Box sx={iconStyle}>
                  <FavoriteBorderOutlined sx={icon} />
                  <Typography>Favourite</Typography>
                </Box>
              </Link>
            }
          />
          <BottomNavigationAction
            icon={
              <Link to="/page4" style={removeTextDecoration}>
                <Box sx={iconStyle}>
                  <AccountCircleOutlined sx={icon} />
                  <Typography>Profile</Typography>
                </Box>
              </Link>
            }
          />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
