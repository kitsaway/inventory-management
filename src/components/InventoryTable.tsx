import { useContext } from "react";
import { InventoryOutput } from "../api/axios";
import InventoryContext, { InventoryContextType } from "../context";
import DeleteButton from "./atoms/DeleteButton";

const InventoryTable: React.FC = (): JSX.Element => {
  const { inventories } = useContext(InventoryContext) as InventoryContextType;

  return (
    <div className="table-responsive">
      <table className="table table-hover table-custom">
        <thead>
          <tr>
            <th>დასახელება</th>
            <th>ადგილმდებარეობა</th>
            <th>ფასი (ლ)</th>
            <th>ოპერაციები</th>
          </tr>
        </thead>
        <tbody>
          {inventories &&
            inventories.map((inv: InventoryOutput) => (
              <tr key={inv.id}>
                <td>{inv.name}</td>
                <td>{inv.location}</td>
                <td>{inv.price}</td>
                <td>
                  <DeleteButton id={inv.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
