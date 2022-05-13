// import axios from "axios";
// import { useMemo, useState, useEffect } from "react";

// export async function getSingleAsset() {
//   try {
//     setLoading(true);
//     const SingleAsset = await axios.get(
//       `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${assetSerialNumber}&assetName=${assetName}`

//       // `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${SingleAsset.assetSerialNumber}&assetName=${SingleAsset.assetName}`
//     );

//     //change to dynamic so eacch individual can run accordingly
//     //right now it fetches just the 1st asset //map function took care of that last time
//     console.log(SingleAsset.data);
//     setSingleAsset(SingleAsset.data);
//   } catch (error) {
//     console.log("ERROR");
//   }
// }
