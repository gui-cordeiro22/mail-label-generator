export type CreateCustomerCustomerData = {
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
  customersListData: CustomersListData<CreateCustomerCustomerData[]>;
};

export type CustomersListActions = {
  clearState: () => void;
  fetchCustomers: (data?: CreateCustomerCustomerData[]) => Promise<boolean>;
};

export type CustomersListStore = {
  state: CustomersListState;
  actions: CustomersListActions;
};
