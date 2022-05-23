// import React from "react";
// import { useMemo, useState, useEffect } from "react";

// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { Marker } from "@react-google-maps/api";
// import "../../pages/single/Single";
// import LocationMarker from "../locationMarker/locationMarker";

// const mapContainerStyle = {
//   width: "1000px",
//   height: "400px",
// };

// const center = {
//   lat: 0,
//   lng: -180,
// };

// //TODO: Add if check foe device id / client id
// // const MapsComponent = ({ addBluePath, positionStart, positionEnd }) => {

// const MapsComponent = ({}) => {
//   const [AllAsset, setAllAsset] = useState([]);
//   const [Loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function getAllAssets() {
//       try {
//         setLoading(true);
//         const AllAsset = await axios.get(
//           " https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/allassets"
//         );
//         setAllAsset(AllAsset.data);
//       } catch (error) {
//         console.log("ERROR DMAp");
//       }
//     }
//     getAllAssets();
//     setLoading(false);
//   }, []);

//   console.log(AllAsset.data);

//   const onLoad = (marker) => {
//     // console.log("marker: ", marker);
//   };

//   //TODO: add spiiner for loading
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
//       <GoogleMap
//         id="marker-example"
//         mapContainerStyle={mapContainerStyle}
//         zoom={3}
//         center={center}
//       >
//         {/* {AllAsset.map((marker,i)=>(
//           <Marker
//           key={i}
//           position={
//             {
//               lat:
//             }
//           }></Marker>
//         ))} */}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapsComponent;
