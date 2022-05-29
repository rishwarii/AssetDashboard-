import "./datatable.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const DataTable = () => {
  const [Assets, setAssets] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const columns = [
    { field: "assetSerialNumber", headerName: "Serial Number", width: 200 },
    { field: "assetName", headerName: "Asset Name", width: 200 },
    { field: "assetType", headerName: "Asset Type", width: 200 },
    {
      field: "expectedDeliveryDateTime",
      headerName: "Expected Delivery Time",
      width: 250,
    },
  ];

  useEffect(() => {
    async function getAllAssets() {
      setisLoading(true);
      const Assets = await axios.get(
        "https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/assets"
      );
      // console.log(Assets.data.assets);
      setAssets(Assets.data.assets);
      setisLoading(false);
    }
    getAllAssets();
  }, []);

  //  handle delelte function

  const handleDelete = async (assetSerialNumber, assetName) => {
    await axios.delete(
      `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${assetSerialNumber}&assetName=${assetName}`
    );

    var remainingAssets = Assets.filter((item) => {
      console.log(item);
      return item.assetSerialNumber !== assetSerialNumber;
    });

    setAssets(remainingAssets);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              // How to access every single member from this list  ?
              to={`/assetList/${params.row.assetSerialNumber}/${params.row.assetName}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() =>
                handleDelete(params.row.assetSerialNumber, params.row.assetName)
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return isLoading ? (
    <div className="loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  ) : (
    <div className="datatable">
      <div className="datatableTitle">
        Asset List
        <Link to="/assetList/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row.assetName}
        className="datagrid"
        components={{
          LoadingOverlay: LinearProgress,
        }}
        rows={Assets}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        loading={isLoading}
      />
    </div>
  );
};

export default DataTable;
