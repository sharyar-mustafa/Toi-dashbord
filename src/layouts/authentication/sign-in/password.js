import * as React from 'react';
import { useState } from 'react';
import {
  Alert,
  AlertTitle,Paper, Typography, CircularProgress, Grid, Box, Button, CssBaseline, TextField, FormControlLabel, Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Redirect, useHistory,useParams } from 'react-router-dom';
// import logo from "../../assets/sell house.png"
// import image from "../../assets/chuttersnap-awL_YCtPGv4-unsplash.webp"
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
import Slide from '@mui/material/Slide';


const theme = createTheme();
const SignIn = () => {
  // const dispatch = useDispatch()
  const history = useHistory();
  const {token} = useParams()
  const [msg, setMsg] = useState("");
  const [success,setSucess] =useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  // const isSignIn = useSelector(state => state.isSignIn)
  const formik = useFormik({
    initialValues: {

      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object
      ({
        

        password: Yup
          .string()
          .max(255)
          .required(
            'Password is required').matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        confirmPassword: Yup
          .string()
          .test(
            "passwords-match",
            "Passwords must match",
            function (value) {
              return this.parent.password === value;
            }
          )
      }),

  //   onSubmit: async (values) => {
  //     //console.log("23q343 run ")
  //     let obj = {
  //       password: values.password,
  //       confirmPassword: values.confirmPassword,
  //       token:token.split("=")[1]
  //     }
  //     if(obj.password !== obj.confirmPassword) return setMsg("Passwords must match")
  //     //console.log(obj)
  //     const config = {
  //       method: "post",
  //       url: `/new-pass`,
  //       withCredentials: true,
  //       data: obj,
  //     }
  //     await axios(config).then(async (res) => {
  //       //console.log(res)
  //       if (res.data.message=== "Password updated succesfully") {
  //         setSucess(true)
  //         setMsg(res.data.message)
  //         setTimeout(() => {
  //           setSucess(false)
  //           setMsg("")
  //           history.push("/signin")
  //         },1000)
  //       } else {
  //         setMsg(res.data.message)
  //         setTimeout(() => {
  //           setSucess(false)
  //           setMsg("")
  //         },1000)
  //       }
  //     }).catch(err => { setTimeout(() => {
  //       setSucess(false)
  //       setMsg("")
  //     },1000);setMsg("Email or Passwrd not Matched"); console.log(err) })
  //   }
  })
  // if (isSignIn) return <Redirect to="/" />

  return (
    // <ThemeProvider theme={theme}>
      <Grid container component="main"  sx={{
        // backgroundImage: `url(${image})`,
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
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p:5,
              borderRadius: '10px',
            }}
            component="paper"
              elevation={6}
          >
            {/* <img src={logo} style={{height:100}} alt="logo" /> */}

            <Typography variant="p" >
              Enter New Password
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
              
              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
                color="secondary"
              />
              <TextField
                error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                fullWidth
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                label="Confirm Password"
                margin="normal"
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.confirmPassword}
                variant="outlined"
                color="secondary"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // color="secondary"
                sx={{ mt: 3, mb: 2, }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? <CircularProgress /> : "Submit"}
              </Button>
            </Box>
            {msg !== "" && <Alert severity={success? "success":"error"}>

              <AlertTitle>{success? "Success":"Error"}</AlertTitle>
              <strong>{msg}</strong>
            </Alert>}
          </Paper>
          </Slide>
        </Grid>
      </Grid>
    // </ThemeProvider>
  );
}
export default SignIn;