import React from "react";
import DashboardLayout from "../../layoutcontainers/DashboardLayout";
import Underdevelopment from "../../assets/images/Under-Development.jpg";
import { Card } from "@mui/material";

const Customers = () => {
  return (
    <DashboardLayout>
      <Card>
        <img src={Underdevelopment} />
      </Card>
    </DashboardLayout>
  );
};
export default Customers;
