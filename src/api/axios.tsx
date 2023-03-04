import axios from "axios";

export interface InventoryInput {
  name: string;
  location: string;
  price: number;
}

export interface InventoryOutput extends InventoryInput {
  id: string;
}

const url: string = process.env.REACT_APP_URL;

export const create = async (formData: InventoryInput) => {
  const { data } = await axios.post(url, formData);
  return data;
};

export const deleteById = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response;
};

export const getAll = async (page: number, filter: string) => {
  const { data } = await axios.get(url, {
    params: {
      filter,
      page,
    },
  });
  return data;
};
