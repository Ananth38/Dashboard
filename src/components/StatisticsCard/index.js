// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import CustomBox from "../CustomBox";
import CustomTypography from "../CustomTypography";
import { Card } from "@mui/material";

function StatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
    return (
        // <CustomBox bgColor='red' variant="gradient" style={{ height: '100%' }}>
        <Card>
            <CustomBox p={2} style={{ height: '100%', }}>
                <Grid container alignItems="center" style={{ height: '100%' }} >
                    {direction === "right" ? (
                        <Grid item >
                            <CustomBox
                                variant="gradient"
                                bgColor="success"
                                color={bgColor === "white" ? "white" : "dark"}
                                width="3rem"
                                height="3rem"
                                borderRadius="xl"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Icon fontSize="medium" color="inherit" sx={{ mt: -2, zIndex:3 }}   zIndex={2} >
                                    {icon.component}
                                </Icon>
                            </CustomBox>
                        </Grid>
                    ) : null}
                    <Grid item xs={8}>
                        <CustomBox ml={2} lineHeight={1}>
                            <CustomTypography
                                variant="button"
                                color={bgColor === "white" ? "text" : "white"}
                                opacity={bgColor === "white" ? 1 : 0.7}
                                textTransform="capitalize"
                                fontWeight={title.fontWeight}
                            >
                                {title.text}
                            </CustomTypography>
                            <CustomTypography
                                variant="h4"
                                fontWeight="bold"
                                color={bgColor === "white" ? "dark" : "white"}
                            >
                                {count}{" "}
                            </CustomTypography>
                            {
                                percentage.text && (
                                    <>
                                        <CustomTypography variant="button" color={percentage.color} fontWeight="bold">
                                            {percentage.text}
                                        </CustomTypography>
                                        <CustomTypography variant="button" color='text' fontWeight="medium">
                                            this month
                                        </CustomTypography>
                                    </>
                                )
                            }
                        </CustomBox>
                    </Grid>
                </Grid>
            </CustomBox>
        </Card>
    );
}

// Setting default values for the props of StatisticsCard
StatisticsCard.defaultProps = {
    bgColor: "white",
    title: {
        fontWeight: "medium",
        text: "",
    },
    percentage: {
        color: "success",
        text: "",
    },
    direction: "right",
};

// Typechecking props for the StatisticsCard
StatisticsCard.propTypes = {
    bgColor: PropTypes.oneOf([
        "white",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
    ]),
    title: PropTypes.PropTypes.shape({
        fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
        text: PropTypes.string,
    }),
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    percentage: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "white",
        ]),
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    icon: PropTypes.shape({
        color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
        component: PropTypes.node
    }),
    direction: PropTypes.oneOf(["right", "left"]),
};

export default StatisticsCard;
