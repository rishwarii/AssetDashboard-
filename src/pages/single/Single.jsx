import { useMemo, useState, useEffect } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import DataTable from "../../components/datatable/DataTable";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import CircularProgress from "@mui/material/CircularProgress";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import axios from "axios";

const Single = () => {
  const { assetSerialNumber, assetName } = useParams();

  //map prt

  // console.log(assetSerialNumber);

  //calling api again after
  //TODO: call api only in one place

  const [SingleAsset, setSingleAsset] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getSingleAsset() {
      try {
        setLoading(true);
        const SingleAsset = await axios.get(
          `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${assetSerialNumber}&assetName=${assetName}`

          // `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${SingleAsset.assetSerialNumber}&assetName=${SingleAsset.assetName}`
        );

        //change to dynamic so eacch individual can run accordingly
        //right now it fetches just the 1st asset //map function took care of that last time
        console.log(SingleAsset.data);
        setSingleAsset(SingleAsset.data);
      } catch (error) {
        console.log("ERROR");
      }
    }
    getSingleAsset();
    setLoading(false);
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          {isLoading ? (
            <div className="loader">
              <Box sx={{ display: "flex" }}>
                <CircularProgress color="secondary" />
              </Box>
            </div>
          ) : (
            isLoading
          )}

          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{SingleAsset.assetName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Asset Type:</span>
                  <span className="itemValue">{SingleAsset.assetType}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Expected Delivery :</span>
                  <span className="itemValue">
                    {SingleAsset.expectedDeliveryDateTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>

        {/* for the time putting map here will make component when get api single  */}
        <div className="bottom">
          <h1 className="title">Map Location</h1>
          <div className="map">
            <Map></Map>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Other Assets</h1>
        </div>
      </div>
    </div>
  );
};

export default Single;
