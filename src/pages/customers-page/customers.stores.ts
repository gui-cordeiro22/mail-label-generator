// Dependencies
import { create } from "zustand";
import { toast } from "react-toastify";

// Database
import { db } from "@/database";

// Types
import { CustomersListState, CustomersListStore } from "./customers.types";

// Helpers
import { formatMessage } from "@/utils/helpers/format-message";

const defaultState = {
  data: undefined,
  isLoading: true,
};

export const useCustomersListStores = create<CustomersListStore>((set) => ({
  customersListData: defaultState,

  clearState: () =>
    set({
      customersListData: defaultState,
    }),

  fetchCustomers: async () => {
    try {
      set((state: CustomersListState) => ({
        ...state,
        isLoading: true,
      }));

      const response = await db.clients.toArray();

      set((state: CustomersListState) => ({
        ...state,
        customersListData: {
          data: response,
          isLoading: false,
        },
      }));

      return true;
    } catch (error) {
      const errorMessage = formatMessage.errors(error);

      toast.error(errorMessage);

      set((state: CustomersListState) => ({
        ...state,
        customersListData: {
          isLoading: false,
        },
      }));

      return false;
    }
  },

  deleteCustomer: async (id) => {
    try {
      set((state: CustomersListState) => ({
        ...state,
        customersListData: {
          isLoading: true,
        },
      }));

      await db.clients.delete(id);

      const successMessage = formatMessage.success("delete");

      toast.success(successMessage);

      return true;
    } catch (error) {
      const errorMessage = formatMessage.errors(error);

      toast.error(errorMessage);

      set((state: CustomersListState) => ({
        ...state,
        customersListData: {
          isLoading: false,
        },
      }));

      return false;
    }
  },
}));
