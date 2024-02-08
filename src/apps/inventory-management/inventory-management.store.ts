import { create } from "zustand";
import { IInventoryItem } from "./inventory-management.types";

interface IInventoryManagementStore {
  isLoading: boolean;
  inventoryItems: IInventoryItem[] | undefined;
  setIsLoading: (loading: boolean) => void;
  setInventoryItems: (inventoryItems: IInventoryItem[] | undefined) => void;
}

const initialState = {
  isLoading: true,
  inventoryItems: undefined,
};

const useInventoryManagementStore = create<IInventoryManagementStore>(
  (set) => ({
    // state
    ...initialState,

    // setState
    setIsLoading: (loading: boolean): void => {
      set({
        isLoading: loading,
      });
    },
    setInventoryItems: (inventoryItems: IInventoryItem[] | undefined): void => {
      set(() => ({
        inventoryItems,
      }));
    },
  })
);

export default useInventoryManagementStore;
