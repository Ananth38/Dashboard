import { useState } from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidenav from './layoutcontainers/components/Sidenav';

// Assets component
import theme from "./assets/theme";

// contexts
import { setMiniSidenav, useDashboardUIController } from './context';
import routes from './routes';
import { Routes, Route, Navigate} from "react-router-dom";

// routes

function App() {

  const [controller, dispatch] = useDashboardUIController();
  const { miniSidenav, layout, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={logo}
            brandName="Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </>
      )}
    </ThemeProvider >
  );
}

export default App;
