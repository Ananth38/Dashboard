import { useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// context
import { useDashboardUIController, setLayout } from "../../context";

// react-router-dom components
import { useLocation } from "react-router-dom";
import CustomBox from "../../components/CustomBox";

const DashboardLayout = ({ children }) => {

    const [controller, dispatch] = useDashboardUIController();
    const { miniSidenav } = controller;
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, "dashboard");
    }, [pathname]);

    return (
        <CustomBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: "relative",

                [breakpoints.up("xl")]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(350),
                    transition: transitions.create(["margin-left", "margin-right"], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            <div style={{ minHeight: "90vh", width: '100%' }}>
                {children}
            </div>
        </CustomBox>
    )
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default DashboardLayout