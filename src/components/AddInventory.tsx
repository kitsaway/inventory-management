import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddButton from "./atoms/AddButton";
import InputField from "./atoms/InputField";
import { ChangeEvent } from "react";
import InventoryContext, { InventoryContextType } from "./../context/index";
import { InventoryInput } from "../api/axios";

type SelectOption = {
  id: string;
  option: string;
};

const options: SelectOption[] = [
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

const schema = yup.object({
  location: yup.string().required("ადგილმდებარეობის მითითება სავალდებულოა"),
  name: yup.string().required("ნივთის დასახელების მითითება სავალდებულოა"),
  price: yup
    .number()
    .typeError("გთხოვთ მიუთითეთ ვალიდური ღირებულება ლარებში")
    .required("ნივთის ღირებულების მითითება სავალდებულოა"),
});

const AddInventory: React.FC = (): JSX.Element => {
  const {
    register,
    reset,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<InventoryInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      location: "",
      price: undefined,
    },
  });
  const { createInventory } = useContext(
    InventoryContext
  ) as InventoryContextType;

  const onSubmit = (data: InventoryInput) => {
    createInventory(data);
    reset();
  };

  const checkForType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);

    if (isNaN(value)) {
      setError("price", {
        type: "type",
        message: "გთხოვთ მიუთითეთ ვალიდური ღირებულება ლარებში",
      });
    } else {
      setValue("price", value);
    }
  };
  return (
    <form
      className="column g-3 needs-validation form-container"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          ადგილმდებარეობა
        </label>
        <select
          className={`form-select ${errors.name?.message ? "is-invalid" : ""}`}
          aria-describedby="selectValidation"
          id="location"
          {...register("location", { required: true })}
          onChange={(e) => setValue("location", e.target.value)}
        >
          <option value={""}>აარჩიე ადგილმდებარეობა</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.option}>
              {opt.option}
            </option>
          ))}
        </select>
        <div id="selectValidation" className="invalid-feedback">
          {errors.location?.message}
        </div>
      </div>
      <InputField
        type="text"
        label="ნივთის დასახელება"
        className={`form-control ${errors.name?.message ? "is-invalid" : ""}`}
        aria-describedby="nameValidation"
        feedbackId="nameValidation"
        errorMessage={errors.name?.message}
        {...register("name")}
        onChange={(e) => setValue("name", e.target.value)}
      />
      <InputField
        type="number"
        step="0.01"
        label="ნივთის ღირებულება (ლ)"
        className={`form-control ${errors.price?.message ? "is-invalid" : ""}`}
        aria-describedby="priceValidation"
        feedbackId="priceValidation"
        errorMessage={errors.price?.message}
        {...register("price")}
        onChange={(e) => checkForType(e)}
      />
      <AddButton className="submit-button" />
    </form>
  );
};

export default AddInventory;
