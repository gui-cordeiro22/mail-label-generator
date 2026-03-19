// Dependenciess
import { useCallback } from "react";
import { useImmer } from "use-immer";

// Database
import { db } from "@/database";

// Types
import {
  CustomerChartState,
  CustomerChartActions,
  CustomerChartStore,
} from "./home.types";

// Helpers
import { customersReportBuilder } from "./home.helpers";

const defaultState = {
  chartData: {
    data: undefined,
    isLoading: true,
  },
};

export const useCustomersChartDataStores = (): CustomerChartStore => {
  const [state, setState] = useImmer<CustomerChartState>(defaultState);

  const clearState: CustomerChartActions["clearState"] = useCallback(() => {
    setState(defaultState);
  }, [setState]);

  const fetchCustomersData: CustomerChartActions["fetchCustomersData"] =
    useCallback(async () => {
      try {
        setState((draft: CustomerChartState) => {
          draft.chartData.isLoading = true;
        });

        const response = await db.clients.toArray();

        const formattedData = customersReportBuilder(response);

        setState((draft: CustomerChartState) => {
          draft.chartData.data = formattedData;
        });

        return true;
      } catch (error) {
        console.error(error);

        setState((draft: CustomerChartState) => {
          draft.chartData.isLoading = false;
        });
        return false;
      }
    }, [setState]);

  return {
    state,
    actions: {
      clearState,
      fetchCustomersData,
    },
  };
};
