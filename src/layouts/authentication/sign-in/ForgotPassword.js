import * as React from 'react';
import { useState } from 'react';
import {
  Alert,
  AlertTitle, Paper,Card, Typography, CircularProgress, Grid, Box, Button, CssBaseline, TextField, FormControlLabel, Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import GradientBorder from "examples/GradientBorder";
import { Redirect, useHistory } from 'react-router-dom';
// import logo from "../../assets/sell house.png"
// import image from "../../assets/chuttersnap-awL_YCtPGv4-unsplash.webp"
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
import Slide from '@mui/material/Slide';
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import VuiBox from "components/VuiBox";
import bgSignIn from "assets/images/signInImage.png";


const theme = createTheme();
const ForgotPassword = () => {
  // const dispatch = useDispatch()
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  // const isSignIn = useSelector(state => state.isSignIn)
  const formik = useFormik({
    initialValues: {
      email: '',

    },
    validationSchema: Yup.object
      ({
        email: Yup
          .string()
          .email(
            'Must be a valid email')
          .max(55)
          .required(
            'Email is required'),
      }),

    // onSubmit: async (values) => {
    //   //console.log("23q343 run ")
    //   let obj = {
    //     email: values.email,
    //   }
    //   //console.log(obj)
    //   const config = {
    //     method: "post",
    //     url: `/forget-pass`,
    //     withCredentials: true,
    //     data: obj,
    //   }
    //   await axios(config).then(async (res) => {
    //     //console.log(res)
    //     if (res.data.message === "Reset Password Link is send to your email") {
    //       setSuccess(true)
    //       setMsg(res.data.messagesage)
    //       setTimeout(() => {
    //         setSuccess(true)
    //         setMsg(res.data.messagesage)
    //       }, 1000)
    //     } else {
    //       setMsg(res.data.messagesage)
    //       setTimeout(() => {
    //         setSuccess(false)
    //         setMsg("")
    //       }, 1000)
    //     }
    //   }).catch(err => {
    //     setTimeout(() => {
    //       setSuccess(false)
    //       setMsg("")
    //     }, 1000); setMsg("Server Error contact to Administrator"); console.log(err)
    //   })
    // }
  })
  // if (isSignIn) return <Redirect to="/" />

  return (
    // <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{
      // backgroundImage: `url(${bgSignIn})`,
      height: '100vh',
      // backgroundRepeat: 'no-repeat',
      // backgroundColor: (t) =>
      //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // boxShadow:'inset 0 0 0 2000px rgba(0, 0, 200, 0.3)'
    }}
      justifyContent='center' justifyItems='center' alignItems='center' >

      <CssBaseline />
      {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
         

        /> */}
      <Grid item sm={6} xs={12} md={6} lg={3} >
        <Slide in={true}
          style={{
            transitionDelay: `500ms`,
          }}
          mountOnEnter
          unmountOnExit>
            <Card>
            <VuiBox>
          {/* <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // backgroundImage: `url(${bgSignIn})`,
              alignItems: 'center',
              p: 5,
              borderRadius: '10px',
            }}
            component="paper"
            elevation={6}
          > */}
            {/* <img src={logo} style={{height:100}} alt="logo" /> */}
            <VuiTypography component="label" variant="button" color="white"  sx={{ fontSize:"25px"}}>
             Forgot password
            </VuiTypography>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            // padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput type="email" placeholder="Your email..." fontWeight="500" />
          </GradientBorder>
        </VuiBox>
              {/* <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                color="secondary"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"

                sx={{ mt: 2, mb: 2, }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? <CircularProgress /> : "Reset Password"}
              </Button>
            </Box>
            {msg !== "" && <Alert severity={success ? "success" : "error"}>

              <AlertTitle>{success ? "Success" : "Error"}</AlertTitle>
              <strong>{msg}</strong>
            </Alert>}
          {/* </Paper> */}
          </VuiBox>
          </Card>
        </Slide>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
export default ForgotPassword;