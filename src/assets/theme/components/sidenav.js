// base styles
import colors from "../base/colors";

// helper functions
import rgba from "../functions/rgba";
import pxToRem from "../functions/pxToRem";

const { dark } = colors;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(300),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(300),
      backgroundColor: rgba(dark.main, 0.8),
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      height: `calc(100vh - ${pxToRem(0)})`,
      marginTop: pxToRem(0),
      // borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
