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

  return {
    state,
    actions: {
      clearState,
      fetchCustomers,
    },
  };
};
