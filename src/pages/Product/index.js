import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../layoutcontainers/DashboardLayout";
import CustomTypography from "../../components/CustomTypography";

function Product() {
  const [pageState, setPagestate] = useState(true);
  const [datas, setDatas] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: null,
    marital: "",
  });

  const [maritalStatus, setMaritalStatus] = useState([
    { id: 1, label: "Single" },
    { id: 2, label: "Married" },
  ]);
  console.log("form:", form);
  const [toggleCard, setToggleCard] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setTimeout(() => {
      setPagestate(false);
    }, 3000);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log("response:", response.data);
        setDatas(response.data);
      });
  };
  console.log("data:", datas);

  const handleChanges = (e) => {
    console.log("handleChanges:", e);
    setToggleCard(false);
    if (e.target.name === "name") {
      setForm({
        ...form,
        name: e.target.value,
      });
    }
    else if (e.target.name === "age") {
      setForm({
        ...form,
        age: e.target.value,
      });
    }
    else if (e.target.name === "marital") {
      setForm({
        ...form,
        marital: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    setToggleCard(!toggleCard);
  };
  console.log("toggleCard:", toggleCard);
  return (
    <DashboardLayout>
      {pageState === false ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={6}>
            <CustomTypography variant="h4" color="black">
              API get method
            </CustomTypography>
            {datas?.map((data) => (
              <Card key={data?.id} sx={{ my: 1 }}>
                <CardHeader
                  title={
                    <Typography variant="subtitle2" fontWeight="bold">
                      {data?.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body2" display="block" gutterBottom>
                    {data?.body}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <CustomTypography variant="h4" color="black">
              Form
            </CustomTypography>
            <Typography variant="subtitle2">Name</Typography>
            <TextField
              size="small"
              name="name"
              value={form.name}
              onChange={handleChanges}
              InputProps={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #000",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #000",
                    },
                  },
                },
                style: {
                  height: "35px",
                },
              }}
            />
            <Typography variant="subtitle2">Age</Typography>
            <TextField
              size="small"
              name="age"
              value={form.age}
              onChange={handleChanges}
              InputProps={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #000",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #000",
                    },
                  },
                },
                style: {
                  height: "35px",
                },
              }}
            />
            <Typography variant="subtitle2">Marital status</Typography>
            <Select
              size="small"
              name="marital"
              placeholder="select marital status"
              style={{ width: "15rem" }}
              value={form.marital}
              onChange={handleChanges}
              className={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #000",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #000",
                    },
                  },
                },
                select: {
                  height: "35px",
                },
              }}
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
            </Select>
            <Box py={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={form.marital && form.name && form.age ? false : true}
              >
                Submit
              </Button>
            </Box>
            {toggleCard === true && (
              <Card style={{ backgroundColor: "green" }}>
                <Box m={2}>
                  <Typography variant="subtitle2" color="#fff">
                    Please check your details
                  </Typography>
                  <Stack direction="row">
                    <Typography variant="overline" color="#fff">
                      Name:
                    </Typography>
                    <Typography variant="overline" color="#fff">
                      {form.name}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="overline" color="#fff">
                      Age:
                    </Typography>
                    <Typography variant="overline" color="#fff">
                      {form.age}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="overline" color="#fff">
                      Marital status:
                    </Typography>
                    <Typography variant="overline" color="#fff">
                      {form.marital}
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            )}
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
            height: "90vh",
          }}
        >
          <CircularProgress color="inherit" />
          <Box>
            <CustomTypography>Take a breath, Data is being fetched </CustomTypography>
          </Box>
        </Box>
      )}
    </DashboardLayout>
  );
}

export default Product;
