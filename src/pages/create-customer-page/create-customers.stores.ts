// Dependenciess
import { useCallback } from "react";
import { useImmer } from "use-immer";
import { toast } from "react-toastify";

// Database
import { db } from "@/database";

// Types
import {
  CreateCustomerState,
  CreateCustomerActions,
  CreateCustomerStore,
} from "./create-customers.types";

// Helpers
import { formatMessage } from "@/utils/helpers/format-message";

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

        const successMessage = formatMessage.success("create");

        toast.success(successMessage);

        return true;
      } catch (error) {
        const errorMessage = formatMessage.errors(error);

        toast.error(errorMessage);

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
