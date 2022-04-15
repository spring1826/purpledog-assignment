import axios from "axios";
import qs from "qs";

export const purpleDogAxios = axios.create({
  baseURL: "https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io",
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});
