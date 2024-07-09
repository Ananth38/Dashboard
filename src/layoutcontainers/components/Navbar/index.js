import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Icon from "@mui/material/Icon";

// Custom styles for Navbar
import { navbarContainer, navbarRow } from "./style";

// Images
import CustomTypography from "../../../components/CustomTypography";
import { Grid, InputAdornment, TextField } from "@mui/material";
import CustomBox from "../../../components/CustomBox";
import {
  useDashboardUIController,
  setTransparentNavbar,
  setMiniSidenav,
} from "../../../context";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";

function Navbar({ isMini }) {
  const [controller, dispatch] = useDashboardUIController();
  const { miniSidenav } = controller;

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  return (
    <CustomBox py={1} px={{ xs: 4, sm: 2, lg: 0 }} my={0} mx={0}>
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <CustomBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
          display={{ xs: "flex", sm: "flex", md: "none", lg: "none" }}
        >
          <CustomBox display="flex">
            <Icon
              fontSize="medium"
              sx={{ cursor: "pointer" }}
              onClick={handleMiniSidenav}
            >
              {miniSidenav ? <MenuOpenIcon /> : <MenuIcon />}
            </Icon>
          </CustomBox>
        </CustomBox>
        {isMini ? null : (
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CustomTypography
                variant={{ xs: "button", sm: "body1" }}
                fontWeight="bold"
                color="#000"
              >
                Hello user
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomBox
                display="flex"
                alignItem="center"
                justifyContent="flex-end"
              >
                <CustomBox width="14rem" ml="auto">
                  <TextField
                    size="small"
                    placeholder="Search here..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #000",
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #000",
                          },
                        },
                      },
                      style: {
                        height: "35px",
                      },
                    }}
                  />
                </CustomBox>
                {/* <CustomBox pr={1} display='flex' justifyContent='flex-end'>
                                            <TextField
                                                placeholder="Type here..."
                                                icon={{ component: "search", direction: "left" }}
                                                size='small'
                                            />
                                        </CustomBox> */}
              </CustomBox>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </CustomBox>
  );
}

// Setting default values for the props of Navbar
Navbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the Navbar
Navbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default Navbar;
