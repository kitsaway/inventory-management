import { createContext, useState, useEffect, useCallback } from "react";
import { InventoryOutput, InventoryInput } from "./../api/axios";
import * as API from "../api/axios";

interface InventoryProviderProps {
  children: React.ReactNode;
}

export interface InventoryContextType {
  inventories: InventoryOutput[];
  currentPage: number;
  pages: number;
  items: number;
  handleFilter: (filter: string) => void;
  handlePageChange: (page: number) => void;
  getInventories: (page: number, filter: string) => void;
  createInventory: (formData: InventoryInput) => void;
  deleteInventory: (id: string) => void;
}

const initContext = {
  inventories: [],
  currentPage: 1,
  pages: 0,
  items: 0,
  handleFilter: () => {},
  handlePageChange: () => {},
  getInventories: () => {},
  createInventory: () => {},
  deleteInventory: () => {},
};

const InventoryContext = createContext<InventoryContextType>(initContext);

export function InventoryProvider({ children }: InventoryProviderProps) {
  const [inventories, setInventories] = useState<InventoryOutput[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [items, setItems] = useState<number>(0);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleFilter = useCallback((filter: string) => {
    setFilter(filter);
  }, []);

  const getInventories = async (page: number, filter: string) => {
    try {
      await API.getAll(page, filter).then((res) => {
        setInventories([...res.data]);
        setPages(res.pages);
        setItems(res.count);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createInventory = async (formData: InventoryInput) => {
    try {
      console.log("formData", formData);
      await API.create({ ...formData }).then((res) => {
        setInventories([...inventories, res.data]);
        setItems(items + 1);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteInventory = async (id: string) => {
    try {
      await API.deleteById(id).then(() => {
        setInventories(inventories?.filter((item) => item.id !== id));
        setItems(items - 1);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInventories(currentPage, filter);
  }, [currentPage, filter]);

  return (
    <InventoryContext.Provider
      value={{
        inventories,
        currentPage,
        pages,
        items,
        handleFilter,
        handlePageChange,
        getInventories,
        createInventory,
        deleteInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export default InventoryContext;
