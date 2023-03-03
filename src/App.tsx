import PagePagination from "./components/atoms/PagePagination";
import Header from "./components/Header";
import InventoryTable from "./components/InventoryTable";
import { InventoryProvider } from "./context";

const App = (): JSX.Element => {
  return (
    <InventoryProvider>
      <Header />
      <InventoryTable />
      <PagePagination />
    </InventoryProvider>
  );
};

export default App;
