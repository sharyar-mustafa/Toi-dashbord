// @mui material components
import {
  Zoom,
} from "@mui/material";
import Card from "@mui/material/Card";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import colors from "assets/theme/base/colors";


// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import linearGradient from "assets/theme/functions/linearGradient";
import { IoPulse } from "react-icons/io5";



// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox sx={{height:"100%", }} py={5} >
        <Card sx={{ display:"flex" , flexDirection:"row", justifyContent:"flex-start", height: "100vh" }}>

          <Card sx={{height:"40%", width:"40%" , }}>
        <VuiBox>
        <VuiTypography  color="white" fontWeight="bold" mb="4px">
          Ampere Meter
        </VuiTypography>
        </VuiBox>
        </Card>

          <Card sx={{height:"40%", width:"40%" }}>
        <VuiBox>
        <VuiTypography  color="white" fontWeight="bold" mb="4px">
          Ampere Meter
        </VuiTypography>
        </VuiBox>
        </Card>

     
         
         
        </Card>
      <Zoom
        in={true}
        style={{
          transitionDelay: `500ms`,
        }}
        unmountOnExit
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon color="secondary" />}
        >
          <SpeedDialAction
            key="Add Lead"
            icon={<AddLocationAltIcon />}
            tooltipTitle="Add Lead"
          // onClick={handleClickOpen}
          />
          <SpeedDialAction
            key="Upload Excel Sheet"
            icon={<CloudUploadIcon />}
            tooltipTitle="Upload Excel Sheet"
          // onClick={handleClickOpenExcel}
          />
        </SpeedDial>
      </Zoom>
    </VuiBox>
    </DashboardLayout >
  );
}

export default Tables;
