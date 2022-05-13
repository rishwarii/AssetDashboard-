import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";
import Table from "../../components/table/Table";

const AssetList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable></DataTable>
        {/* <Table></Table> */}
      </div>
    </div>
  );
};

export default AssetList;
