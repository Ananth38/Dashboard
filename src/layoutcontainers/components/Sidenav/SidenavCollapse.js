// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "./styles/sidenavCollapse";

// context
import { useDashboardUIController } from "../../../context";
import CustomBox from "../../../components/CustomBox";

function SidenavCollapse({ color, icon, iconType, name, children, noCollapse, open, ...rest }) {
  const [controller] = useDashboardUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;

  return (
    <>
      <ListItem component="li">
        <CustomBox {...rest} sx={(theme) => collapseItem(theme, { transparentSidenav })}>
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { transparentSidenav, sidenavColor })}
            style={{
              opacity: 1,
            }}
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme)} style={{
                opacity: 1,
              }}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav })}
            style={{
              opacity: 1,
              color: '#fff'
            }}
          />

          {children && (
            <Icon
              sx={(theme) =>
                collapseArrow(theme, { noCollapse, transparentSidenav, miniSidenav, open })
              }
            >
              expand_less
            </Icon>
          )}
        </CustomBox>
      </ListItem >
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )
      }
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  iconType: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
