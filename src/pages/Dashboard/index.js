import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layoutcontainers/DashboardLayout";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Icon,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import StatisticsCard from "../../components/StatisticsCard";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { BarChart } from "../../components/BarChart";
import "../../index.css";
import CustomDataGrid from "../../components/CustomDataGrid";
import CustomBox from "../../components/CustomBox";
import CustomTypography from "../../components/CustomTypography";
import SearchIcon from "@mui/icons-material/Search";
import { PieChart, useDrawingArea } from "@mui/x-charts";
import styled from "@emotion/styled";
import Navbar from "../../layoutcontainers/components/Navbar";

const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);
  const [productSell, setProductSell] = useState([]);
  const [pageState, setPagestate] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setTimeout(() => {
      setPagestate(false);
    }, 3000);
    setStatistics([
      {
        title: "Earning",
        count: "₹198k",
        percentage: {
          color: "success",
          text: "+37.8%",
        },
        icon: {
          component: <CurrencyExchangeIcon />,
        },
      },
      {
        title: "Orders",
        count: "₹2.4k",
        percentage: {
          color: "error",
          text: "+2%",
        },
        icon: {
          component: <ListAltIcon />,
        },
      },
      {
        title: "Balance",
        count: "₹2.4k",
        percentage: {
          color: "error",
          text: "+2%",
        },
        icon: {
          component: <AccountBalanceIcon />,
        },
      },
      {
        title: "Total Sales",
        count: "₹89k",
        percentage: {
          color: "success",
          text: "+11%",
        },
        icon: {
          component: <GroupsIcon />,
        },
      },
    ]);
    setProductSell([
      {
        id: 1,
        image:
          "https://img.freepik.com/premium-photo/woman-hand-picking-book-from-bookshelf-library-university-college-high-school-bookshop_1048944-21899470.jpg?w=996",
        title: "Abstract 3D",
        stock: "32 in stock",
        price: "$ 45.99",
        totalsales: 20,
      },
      {
        id: 2,
        image:
          "https://img.freepik.com/premium-photo/woman-hand-picking-book-from-bookshelf-library-university-college-high-school-bookshop_1048944-21899470.jpg?w=996",
        title: "Sarphenes Illustration",
        stock: "32 in stock",
        price: "$ 45.99",
        totalsales: 20,
      },
    ]);
  };

  const productsellTable = {
    columns: [
      {
        field: "productName",
        name: "Product name",
        flex: 1,
        disableColumnMenu: true,
        sortable: false,
        type: "images",
      },
      {
        field: "title",
        name: " ",
        flex: 3,
        editable: false,
        disableColumnMenu: true,
      },
      {
        field: "stock",
        name: "Stock",
        flex: 1,
        disableColumnMenu: true,
        editable: false,
      },
      {
        field: "price",
        name: "Price",
        flex: 1,
        disableColumnMenu: true,
        editable: false,
      },
      {
        field: "totalsales",
        name: "Total Sales",
        flex: 1,
        disableColumnMenu: true,
        editable: false,
      },
    ],
  };

  const data = [
    { value: 5, label: "Naveen" },
    { value: 10, label: "Jeyashree" },
    { value: 15, label: "Gowri" },
    { value: 5, label: "Dhaya" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <DashboardLayout>
      <Navbar />
      {pageState === false ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={1} alignItems="stretch">
              {statistics.map((stat, index) => (
                <Grid item xs={12} sm={3} lg={3} md={3} xl={3} key={index}>
                  <StatisticsCard
                    title={{ text: stat.title, fontWeight: "bold" }}
                    count={stat.count}
                    percentage={{
                      color: stat.percentage.color,
                      text: stat.percentage.text,
                    }}
                    icon={{
                      color: "dark",
                      component: <Icon>{stat.icon?.component}</Icon>,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} lg={7} ml={3} className="bar-chart">
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Card>
              <CardContent
                style={{
                  minHeight: "45vh",
                }}
              >
                <CustomBox
                  style={{
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <CustomTypography variant="h5">Customers</CustomTypography>
                  <CustomTypography variant="button" color="text">
                    Customers that by products
                  </CustomTypography>
                </CustomBox>
                <CustomBox
                  style={{
                    textAlign: "right",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  ml={2}
                >
                  <PieChart
                    series={[{ data, innerRadius: 60 }]}
                    {...size}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                  >
                    <PieCenterLabel>65%</PieCenterLabel>
                  </PieChart>
                </CustomBox>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Card>
              <Grid container p={2}>
                <Grid item xs={6} md={6}>
                  <CustomTypography variant="h4" color="black">
                    Product Sell
                  </CustomTypography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <CustomBox width="16rem" ml="auto">
                    <TextField
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CustomBox>
                </Grid>
              </Grid>

              <CustomDataGrid
                rows={productSell}
                columns={productsellTable.columns}
                style={{
                  border: 0,
                  // cursor: onRowClick && ("pointer"),
                }}
                checkboxSelection={false}
                disableRowSelectionOnClick
                // rowsPerPageOptions={[25, 50, 100]}
                isSelectable={false}
                density="standard"
                disableColumnMenu
                disableSelectionOnClick
              />
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          style={{
            backgroundColor: "#EEEEEE",
            height: "80vh",
          }}
        >
          <CircularProgress color="inherit" />
          <Box>
            <CustomTypography>
              Take a breath, Data is being fetched{" "}
            </CustomTypography>
          </Box>
        </Box>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
