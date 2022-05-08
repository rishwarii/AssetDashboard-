import { useState, useEffect } from "react";
import axios from "axios";

function InfoGet() {
  const url =
    "https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/assets";
  const [assets, setProduct] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (assets) {
    content = (
      <div>
        <h1>{assets.assetName}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{assets.assetName}</h1>
    </div>
  );
}

export default InfoGet;
