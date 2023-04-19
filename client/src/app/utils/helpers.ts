import { config } from "../config";

export const buildApiUrl = (endpoint: string) => {
  return config.http.baseApiUrl + endpoint;
};
