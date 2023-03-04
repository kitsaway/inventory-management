import { MouseEventHandler } from "react";

interface ButtonPropsI {
  children?: React.ReactNode;
  className?: string;
  props?: any;
  onClick?: MouseEventHandler<HTMLElement>;
}

const AddButton: React.FC<ButtonPropsI> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type="submit"
      className={`btn btn-dark ${className}`}
      onClick={onClick}
    >
      ნივთის დამატება
    </button>
  );
};

export default AddButton;
