// Dependenciess
import { useCallback } from "react";
import { useImmer } from "use-immer";

// Database
import { db } from "@/database";

// Types
import {
  CustomersListState,
  CustomersListActions,
  CustomersListStore,
} from "./customers.types";
import { formatMessage } from "@/utils/helpers/format-message";
import { toast } from "react-toastify";

const defaultState = {
  customersListData: {
    data: undefined,
    isLoading: true,
  },
};

export const useCustomersListStores = (): CustomersListStore => {
  const [state, setState] = useImmer<CustomersListState>(defaultState);

  const clearState: CustomersListActions["clearState"] = useCallback(() => {
    setState(defaultState);
  }, [setState]);

  const fetchCustomers: CustomersListActions["fetchCustomers"] =
    useCallback(async () => {
      try {
        setState((draft: CustomersListState) => {
          draft.customersListData.isLoading = true;
        });

        const response = await db.clients.toArray();

        setState((draft: CustomersListState) => {
          draft.customersListData.data = response;
        });

        return true;
      } catch (error) {
        console.error("error: ", error);

        setState((draft: CustomersListState) => {
          draft.customersListData.isLoading = false;
        });

        return false;
      }
    }, [setState]);

  const deleteCustomer: CustomersListActions["deleteCustomer"] = useCallback(
    async (id) => {
      try {
        setState((draft: CustomersListState) => {
          draft.customersListData.isLoading = true;
        });

        await db.clients.delete(id);

        const successMessage = formatMessage.success("delete");

        toast.success(successMessage);

        return true;
      } catch (error) {
        const errorMessage = formatMessage.errors(error);

        toast.error(errorMessage);

        setState((draft: CustomersListState) => {
          draft.customersListData.isLoading = true;
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
      fetchCustomers,
      deleteCustomer,
    },
  };
};
