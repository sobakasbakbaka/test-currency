import ky from "ky";
import { CurrencyApiResponse } from "@/interfaces/Currency";
const api = ky.create({
  prefixUrl: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCurrencies = async (): Promise<CurrencyApiResponse> => {
  try {
    const response = await api.get("daily_json.js");
    return await response.json();
  } catch (error) {
    console.error("Error fetching currencies", error);
    throw Error;
  }
};
