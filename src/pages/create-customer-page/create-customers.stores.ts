// Dependencies
import { create } from "zustand";
import { toast } from "react-toastify";

// Database
import { db } from "@/database";

// Types
import {
  CreateCustomerState,
  CreateCustomerStore,
} from "./create-customers.types";

// Helpers
import { formatMessage } from "@/utils/helpers/format-message";

const defaultState = {
  data: undefined,
  isLoading: true,
};

export const useCreateCustomerStores = create<CreateCustomerStore>((set) => ({
  customerData: defaultState,

  clearState: () =>
    set({
      customerData: defaultState,
    }),

  createCustomer: async (customerData) => {
    try {
      set((state: CreateCustomerState) => ({
        customerData: {
          ...state.customerData,
          isLoading: true,
        },
      }));

      if (customerData) {
        await db.clients.add(customerData);
      }

      toast.success(formatMessage.success("create"));

      return true;
    } catch (error) {
      toast.error(formatMessage.errors(error));

      set((state) => ({
        customerData: {
          ...state.customerData,
          isLoading: false,
        },
      }));

      return false;
    }
  },

  fetchCustomerById: async (id) => {
    try {
      set((state) => ({
        customerData: {
          ...state.customerData,
          isLoading: true,
        },
      }));

      const response = await db.clients.get(id);

      set({
        customerData: {
          data: response,
          isLoading: false,
        },
      });

      return true;
    } catch (error) {
      toast.error(formatMessage.errors(error));

      set((state) => ({
        customerData: {
          ...state.customerData,
          isLoading: false,
        },
      }));

      return false;
    }
  },

  editCustomer: async (id, customerData) => {
    try {
      set((state) => ({
        customerData: {
          ...state.customerData,
          isLoading: true,
        },
      }));

      const response = await db.clients.put({
        id,
        ...customerData,
      });

      set({
        customerData: {
          data: response,
          isLoading: false,
        },
      });

      toast.success(formatMessage.success("edit"));

      return true;
    } catch (error) {
      toast.error(formatMessage.errors(error));

      set((state) => ({
        customerData: {
          ...state.customerData,
          isLoading: false,
        },
      }));

      return false;
    }
  },
}));
