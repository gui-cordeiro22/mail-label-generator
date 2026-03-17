export type CreateCustomerCustomerData = {
  id?: number;
  name: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export type CreateCustomerData<T> = {
  data?: T;
  isLoading: boolean;
};

export type CreateCustomerState = {
  customerData: CreateCustomerData<CreateCustomerCustomerData>;
};

export type CreateCustomerActions = {
  clearState: () => void;
  createCustomer: (data?: CreateCustomerCustomerData) => Promise<boolean>;
};

export type CreateCustomerStore = {
  state: CreateCustomerState;
  actions: CreateCustomerActions;
};
