import SearchForm from "../utils/searchForm";
import MaintenanceTable from "./maintenanceTable";

const MaintenanceList = () => {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <SearchForm title="รายการซ่อมบำรุง" />
        <MaintenanceTable />
      </div>
    </>
  );
};

export default MaintenanceList;
