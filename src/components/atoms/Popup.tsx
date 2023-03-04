import InventoryContext, { IFeedback } from "../../context";
import { useContext } from 'react';
import { InventoryContextType } from './../../context/index';

const Popup = ({ type, message }: IFeedback) => {
  const { resetFeedback } = useContext(InventoryContext) as InventoryContextType;
  return (
    <>
      {message && (
        <div
          className={`alert alert-${type} alert-dismissible fade show`}
          role="alert"
        >
          {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => resetFeedback()}
          ></button>
        </div>
      )}
    </>
  );
};

export default Popup;
