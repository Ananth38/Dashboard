import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// components
import CustomProgressRoot from "./CustomProgressRoot";
import CustomTypography from "../CustomTypography";

// Custom styles for CustomProgress

const CustomProgress = forwardRef(({ variant, color, value, label, labelColor, customLabel, ...rest }, ref) => (
  <>
    {label && (
      <CustomTypography variant="button" fontWeight="medium" color={labelColor}>
        {customLabel ? customLabel : `${value}%`}
      </CustomTypography>
    )}
    <CustomProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of CustomProgress
CustomProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
  labelColor: "text",
  customLabel: null,
};

// Typechecking props for the CustomProgress
CustomProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
  labelColor: PropTypes.string,
  customLabel: PropTypes.node,
};

export default CustomProgress;
