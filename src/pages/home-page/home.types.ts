export type CustomerChartChartData = {
    uf: string;
    clients: number;
};

export type CustomerChartData<T> = {
    data?: T;
    isLoading: boolean;
};

export type CustomerChartState = {
    chartData: CustomerChartData<CustomerChartChartData[]>;
};

export type CustomerChartActions = {
    clearState: () => void;
    fetchCustomersData: (data?: CustomerChartChartData[]) => Promise<boolean>;
};

export type CustomerChartStore = {
    state: CustomerChartState;
    actions: CustomerChartActions;
};
