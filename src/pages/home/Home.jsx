import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Asset from "../../Assets";
import AssetList from "../../Assets";
import DataTable from "../../components/datatable/DataTable";
import MapsComponentDash from "../../components/map/dasboardMap";
import Map from "../../components/map/Map";
import Datatable from "../../components/datatable/DataTable";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";

const Home = () => {
  return (
    <div className="home">
      <MiniDrawer />
      <div className="homeContainer">
        <div className="widgets">{/* <Widget type="order" /> */}</div>
        <div className="listContainer">
          <div>
            <div className="listTitle">All Asset Location</div>
            <MapsComponentDash></MapsComponentDash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
