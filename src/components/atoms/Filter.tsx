import { useContext } from "react";
import InventoryContext, { InventoryContextType } from "../../context";

const FilterLocation = () => {
  const { handleFilter } = useContext(InventoryContext) as InventoryContextType;

  const filters = [
    {
      id: "main-office",
      option: "მთავარი ოფისი",
    },
    {
      id: "cavea-gallery",
      option: "კავეა გალერია",
    },
    {
      id: "cavea-tbilisi-mall",
      option: "კავეა თბილისი მოლი",
    },
    {
      id: "cavea-east-point",
      option: "კავეა ისთ ფოინთი",
    },
    {
      id: "cavea-city-mall",
      option: "კავეა სითი მოლი",
    },
  ];
  return (
    <div className="filter-container">
      <p className="text-muted">ფილტრი</p>
      <select
        className="form-select"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option defaultChecked value="">
          ყველა
        </option>
        {filters.map((filter) => (
          <option key={filter.id} value={filter.option}>
            {filter.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterLocation;
