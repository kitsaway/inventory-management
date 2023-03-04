import PagePagination from "./components/atoms/PagePagination";
import Header from "./components/Header";
import InventoryTable from "./components/InventoryTable";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <InventoryTable />
      <PagePagination />
    </>
  );
};

export default App;
