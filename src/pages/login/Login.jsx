// import axios from "axios";
// import { useMemo, useState, useEffect } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import DataTable from "../../components/datatable/DataTable";
// import React from "react";
// import MapsComponent from "../../components/map/Map";
// const [SingleAsset, setSingleAsset] = useState([]);
// useEffect(() => {
//   async function getSingleAsset() {
//     try {
//       const SingleAsset = await axios.get(
//         "https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/trackhistory?deviceSerialNumber=50bb3998601240ab96ecaff7a0bf562a"
//       );

//       //change to dynamic so eacch individual can run accordingly
//       //right now it fetches just the 1st asset //map function took care of that last time
//       // console.log(SingleAsset.data);
//       setSingleAsset(SingleAsset.data);
//     } catch (error) {
//       console.log("ERROR");
//     }
//   }
//   getSingleAsset();
//   console.log(SingleAsset.data);
// }, []);
