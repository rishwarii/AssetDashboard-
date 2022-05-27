import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
// import DateTimePicker from "@mui/x-date-pickers/DateTimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers";
// import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { styled } from "@mui/material/styles";
import AssetList from "../list/AssetList";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";
import axios from "axios";
import {
  Typography,
  Box,
  Paper,
  makeStyles,
  Grid,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");

const NewAsset = () => {
  const [newAsset, setnewAsset] = useState({
    assetName: "",
    assetSerialNumber: "",
    assetType: "",
    deviceSerialNumber: "",
    endLocationLatitude: "",
    endLocationLongitude: "",
    startLocationLatitude: "",
    startLocationLongitude: "",
  });

  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setnewAsset({
      ...newAsset,
      [e.target.name]: e.target.value,
    });

    // console.log(newAsset);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset`,
        newAsset
      );
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return (
      <div>
        <AssetList></AssetList>
      </div>
    );
  }

  return (
    <div className="home">
      <MiniDrawer />
      <div className="homeContainer">
        <div className="top">
          <h1>Add New Asset </h1>
        </div>

        <div className="right"></div>

        <form>
          <div className="left">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 5, sm: 5, md: 5 }}
            >
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="assetName"
                    name="assetName"
                    variant="outlined"
                    required
                    fullWidth
                    id="assetName"
                    label=" Asset Name"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="assetSerialNumber"
                    name="assetSerialNumber"
                    variant="outlined"
                    required
                    fullWidth
                    id="assetSerialNumber"
                    label="Asset Serial Number"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="deviceSerialNumber"
                    name="deviceSerialNumber"
                    variant="outlined"
                    required
                    fullWidth
                    id="deviceSerialNumber"
                    label="deviceSerialNumber"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="assetType"
                    name="assetType"
                    variant="outlined"
                    required
                    fullWidth
                    id="assetType"
                    label=" Asset Type"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="endLocationLatitude"
                    name="endLocationLatitude"
                    variant="outlined"
                    required
                    fullWidth
                    id="endLocationLatitude"
                    label="End Location Latitude"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="endLocationLongitude"
                    name="endLocationLongitude"
                    variant="outlined"
                    required
                    fullWidth
                    id="endLocationLongitude"
                    label=" endLocationLongitude"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="startLocationLatitude"
                    name="startLocationLatitude"
                    variant="outlined"
                    required
                    fullWidth
                    id="startLocationLatitude"
                    label=" startLocationLatitude"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="formInput">
                  <TextField
                    autoComplete="startLocationLongitude"
                    name="startLocationLongitude"
                    variant="outlined"
                    required
                    fullWidth
                    id="startLocationLongitude"
                    label=" Asset startLocationLongitude"
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid item xs={6}>
            <div className="formInput">
              {/* <KeyboardDateTimePicker
                // renderInput={() => <TextField/>}
                name="expectedDeliveryDateTime"
                required
                value={newAsset}
                fullWidth
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 250 }}
                id="expectedDeliveryDateTime"
                label=" expectedDeliveryDateTime"
                onChange={(e) => onTextFieldChange(e)}
              /> */}
            </div>
          </Grid>
          <Box m={3}>
            <Button
              width="150px"
              type="submit"
              align="center"
              variant="contained"
              color="primary"
              onClick={(e) => onFormSubmit(e)}
            >
              Add Asset
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default NewAsset;
