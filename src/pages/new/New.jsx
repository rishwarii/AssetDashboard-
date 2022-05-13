import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NewAsset = () => {
  const [newAsset, setnewAsset] = useState({
    assetName: "",
    assetSerialNumber: "",
    assetType: "",
    deviceSerialNumber: "",
    endLocationLatitude: "",
    endLocationLongitude: "",
    expectedDeliveryDateTime: "",
    startLocationLatitude: "",
    startLocationLongitude: "",
  });

  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setnewAsset({
      ...newAsset,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/assets`,
        newAsset
      );
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return <div>Loading ... </div>;
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Asset </h1>
        </div>
        <div>
          {/* <div className="left"></div> */}
          <div>
            <form>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    {" "}
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
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <div className="formInput">
                      <TextField
                        autoComplete="assetType"
                        name="assetType"
                        variant="outlined"
                        required
                        fullWidth
                        id="assetType"
                        label="assetType"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>4</Item>
                </Grid>
              </Grid>
              {/* 
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAsset;
