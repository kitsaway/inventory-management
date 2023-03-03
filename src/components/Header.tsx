import { useNavigate } from "react-router-dom";
import FilterLocation from "./atoms/Filter";
import AddButton from "./atoms/AddButton";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container header">
      <AddButton onClick={() => navigate("/add")} />
      <FilterLocation />
    </div>
  );
};

export default Header;
