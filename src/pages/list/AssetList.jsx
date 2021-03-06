import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable.jsx";
import Table from "../../components/table/Table";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";

const AssetList = () => {
  return (
    <div className="list">
      <MiniDrawer />
      <div className="listContainer">
        <DataTable></DataTable>
        {/* <Table></Table> */}
      </div>
    </div>
  );
};

export default AssetList;
