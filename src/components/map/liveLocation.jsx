import React, { useDebugValue } from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

import {
  GoogleMap,
  InfoWindow,
  Polyline,
  useLoadScript,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "1000px",
  height: "400px",
};

const mapContainerRight = {
  width: "700px",
  height: "350px",
};

const center = {
  lat: 27.1753738514716,
  lng: 78.04209928206996,
};

export const LiveTracking = () => {
  const [liveLoc, setliveLoc] = useState([
    {
      curLoc: {
        lat: 78,
        lng: 26,
      },
    },
  ]);

  const { curLoc } = liveLoc;
  const updateState = (data) =>
    setliveLoc((liveLoc) => ({ ...liveLoc, ...data }));

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async function getLiveLocation() {
    try {
      // TODO: add customize
      const LiveLocation = await axios.get(
        `https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/trackpoint?deviceSerialNumber=50bb3998601240ab96ecaff7a0bf562a`
      );

      updateState({
        curLoc: {
          lat: parseFloat(LiveLocation.data.path.Latitude),
          lng: parseFloat(LiveLocation.data.path.Longitude),
        },
      });
      console.log("HELLO this updates ");

      console.log(LiveLocation.data.path.Longitude);
    } catch (error) {
      console.log("ERROR IN Liive LOCcation");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
        >
          <Marker position={curLoc}>
            icon=
            {{
              scale: 7,
              path: "https://img.icons8.com/pastel-glyph/344/transportation--delivery--logistics--cargo--parcel--bus--service-27.png",
            }}
          </Marker>
        </GoogleMap>
      </LoadScript>
    </>
  );
};
// export const LiveView = (clientID) => {
//   const [liveLoc, setliveLoc] = useState([]);
//   const [Loading, setLoading] = useState(false);

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       async function getLiveLocation() {
//         try {
//           setLoading(true);
//           // TODO: add customize
//           const LiveLocation = await axios.get(
//             `https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/trackpoint?deviceSerialNumber=50bb3998601240ab96ecaff7a0bf562a`
//           );

//           setliveLoc(LiveLocation.data.path);
//           setLoading(false);
//         } catch (error) {
//           console.log("ERROR IN Liive LOCcation");
//         }

//         getLiveLocation();
//       }
//     }, 1000);

//     return () => clearInterval(intervalID);
//   }, [clientID, useState]);

//   var positionUpdate = {
//     lat: liveLoc.Latitude,
//     lng: liveLoc.Longitude,
//   };

//   return positionUpdate;

//   // setInterval(updateMarker , 1000)

//   // var marker ;

//   // function updateMarker(){

//   // }
// };
