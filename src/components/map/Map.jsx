import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "../../pages/single/Single";

const containerStyle = {
  width: "1000px",
  height: "400px",
};

// https://react-google-maps-api-docs.netlify.app/

const MapsComponent = (latitude, longitude) => {
  // const position = {
  //   latitude: parseFloat(props.latitude),
  //   longitude: parseFloat(props.longitude),
  // };

  const center = {
    lat: 0,
    lng: -180,
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);

    return (
      <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker onLoad={onLoad} lat={latitude} lon={longitude} />
        </GoogleMap>
      </LoadScript>
    );
  };
};

export default MapsComponent;
