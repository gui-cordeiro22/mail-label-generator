export type CustomersListListData = {
  id?: number;
  name: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export type CustomersListData<T> = {
  data?: T;
  isLoading: boolean;
};

export type CustomersListState = {
  customersListData: CustomersListData<CustomersListListData[]>;
};

export type CustomersListActions = {
  clearState: () => void;
  fetchCustomers: (data?: CustomersListListData[]) => Promise<boolean>;
  deleteCustomer: (id: number) => Promise<boolean>;
};

export type CustomersListStore = {
  state: CustomersListState;
  actions: CustomersListActions;
};
