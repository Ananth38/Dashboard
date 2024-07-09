/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

//  React main context
const DashboardUI = createContext(null);

// Setting custom name for the context which is visible on react dev tools
DashboardUI.displayName = "DashboardUIContext";

// React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// React context provider
function DashboardUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    sidenavColor: "dark",
    layout: "dashboard",
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <DashboardUI.Provider value={value}>{children}</DashboardUI.Provider>;
}

// React custom hook for using context
function useDashboardUIController() {
  const context = useContext(DashboardUI);
  if (!context) {
    throw new Error("Error");
  }

  return context;
}

// Typechecking props for the DashboardUIControllerProvider
DashboardUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });

export {
  DashboardUIControllerProvider,
  useDashboardUIController,
  setMiniSidenav,
  setSidenavColor,
  setLayout,
};
