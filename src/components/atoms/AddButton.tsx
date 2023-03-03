interface ButtonPropsI {
  children?: React.ReactNode;
  className?: string;
  props?: any;
  onClick?: any;
}

const AddButton: React.FC<ButtonPropsI> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn btn-dark ${className}`}
      onClick={onClick}
    >
      ნივთის დამატება
    </button>
  );
};

export default AddButton;
