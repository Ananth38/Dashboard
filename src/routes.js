import Dashboard from "./pages/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Product from "./pages/Product";
import Customers from "./pages/Customers";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <InventoryIcon size="12px" />,
    route: "/dashboard",
    component: <Dashboard />,
    hidden: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "API",
    key: "product",
    icon: <ShoppingCartIcon size="12px" />,
    route: "/api-methods",
    component: <Product />,
    hidden: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <AccountCircleIcon size="12px" />,
    route: "/customers",
    component: <Customers />,
    hidden: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Income",
    key: "income",
    icon: <AccountBalanceWalletIcon size="12px" />,
    route: "/income",
    component: <Customers />,
    hidden: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Promote",
    key: "promote",
    icon: <CollectionsBookmarkIcon size="12px" />,
    route: "/promote",
    component: <Customers />,
    hidden: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Help",
    key: "help",
    icon: <LiveHelpIcon size="12px" />,
    route: "/help",
    component: <Customers />,
    hidden: false,
    noCollapse: true,
  },
];

export default routes;
