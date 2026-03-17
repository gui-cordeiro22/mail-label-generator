// Dependenciess
import { useCallback } from "react";
import { useImmer } from "use-immer";

// Database
import { db } from "@/database";

// Types
import {
  CreateCustomerState,
  CreateCustomerActions,
  CreateCustomerStore,
} from "./create-customers.types";

const defaultState = {
  customerData: {
    data: undefined,
    isLoading: true,
  },
};

export const useCreateCustomerStores = (): CreateCustomerStore => {
  const [state, setState] = useImmer<CreateCustomerState>(defaultState);

  const clearState: CreateCustomerActions["clearState"] = useCallback(() => {
    setState(defaultState);
  }, [setState]);

  const createCustomer: CreateCustomerActions["createCustomer"] = useCallback(
    async (customerData) => {
      try {
        setState((draft: CreateCustomerState) => {
          draft.customerData.isLoading = true;
        });

        if (customerData) {
          await db.clients.add(customerData);
        }

        return true;
      } catch (error) {
        console.error(error);

        setState((draft: CreateCustomerState) => {
          draft.customerData.isLoading = false;
        });

        return false;
      }
    },
    [setState],
  );
  return {
    state,
    actions: {
      clearState,
      createCustomer,
    },
  };
};
