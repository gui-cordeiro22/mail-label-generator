// Dependencies
import axios from "axios";

// Utils
import { SUCCESS_MESSAGES } from "../constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
const formatErrors = (error: any): string => {
  const isAxiosError = axios.isAxiosError(error);

  if (isAxiosError) {
    return error.response?.data?.message ?? error.message;
  }

  return (error as Error).message;
};

const formatSuccess = (action: keyof typeof SUCCESS_MESSAGES): string => {
  return SUCCESS_MESSAGES[action];
};

export const formatMessage = {
  success: (param: keyof typeof SUCCESS_MESSAGES) => formatSuccess(param),
  /* eslint-disable @typescript-eslint/no-explicit-any */
  errors: (param: any) => formatErrors(param),
};
