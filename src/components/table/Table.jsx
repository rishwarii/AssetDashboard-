import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [Assets, setAssets] = useState();

  useEffect(() => {
    async function getAllAssets() {
      const Assets = await axios.get(
        "https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/assets"
      );
      console.log(Assets.data.assets);
      setAssets(Assets.data.assets);
    }
    getAllAssets();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Serial Number </TableCell>
            <TableCell className="tableCell">Asset Name</TableCell>
            <TableCell className="tableCell">Asset Type </TableCell>
            <TableCell className="tableCell">Expected Date </TableCell>
            <TableCell className="tableCell">
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Assets &&
            Assets.map((Asset, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="tableCell">
                    {Asset.assetSerialNumber}
                  </TableCell>
                  <TableCell className="tableCell">{Asset.assetType}</TableCell>
                  <TableCell className="tableCell">
                    {Asset.expectedDeliveryDateTime}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
