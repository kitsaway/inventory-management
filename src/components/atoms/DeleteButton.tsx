import { useContext } from "react";
import InventoryContext, { InventoryContextType } from "../../context";

const DeleteButton = (props: { id: string }): JSX.Element => {
  const { deleteInventory } = useContext(
    InventoryContext
  ) as InventoryContextType;
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => deleteInventory(props.id)}
    >
      წაშლა
    </button>
  );
};

export default DeleteButton;
