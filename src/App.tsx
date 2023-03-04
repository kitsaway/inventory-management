import PagePagination from "./components/atoms/PagePagination";
import Header from "./components/Header";
import InventoryTable from "./components/InventoryTable";
import { useContext } from "react";
import InventoryContext from "./context";
import { InventoryContextType } from "./context/index";
import Popup from "./components/atoms/Popup";

const App = (): JSX.Element => {
  const { feedback } = useContext(InventoryContext) as InventoryContextType;
  return (
    <>
      <Popup type={feedback.type} message={feedback.message} />
      <Header />
      <InventoryTable />
      <PagePagination />
    </>
  );
};

export default App;
