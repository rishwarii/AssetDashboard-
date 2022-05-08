import React, { useState, useEffect } from "react";

export default class AssetList extends React.Component {
  state = {
    loading: true,
    assets: null,
  };

  async componentDidMount() {
    const url =
      "https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/assets";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.assets[0].assetName);\
    this.setState({ assets: data.assets[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.assets ? (
          <div>Loading .. </div>
        ) : (
          <div>
            <div>{this.state.assets.assetName}</div>
          </div>
        )}
      </div>
    );
  }
}
