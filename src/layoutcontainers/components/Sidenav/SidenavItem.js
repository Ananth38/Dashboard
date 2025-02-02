// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "./styles/sidenavItem";

// contexts
import { useDashboardUIController } from "../../../context";
import CustomBox from "../../../components/CustomBox";

function SidenavItem({ name, active, nested, children, open, ...rest }) {
  const [controller] = useDashboardUIController();
  const { miniSidenav } = controller;

  return (
    <>
      <ListItem {...rest} component="li" sx={item}>
        <CustomBox sx={(theme) => itemContent(theme, { active, miniSidenav, name, nested })}>
          <ListItemText primary={name} />
          {children && (
            <Icon component="i" sx={(theme) => itemArrow(theme, { open, miniSidenav })}>
              expand_less
            </Icon>
          )}
        </CustomBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  nested: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  nested: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
