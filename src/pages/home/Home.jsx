import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Asset from "../../Assets";
import AssetList from "../../Assets";
import Table2 from "../../components/table/Table2";
import Map from "../../components/map/Map";
import Datatable from "../../components/datatable/Datatable";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle"></div>
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
