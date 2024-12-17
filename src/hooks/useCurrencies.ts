import { CurrencyApiResponse } from "@/interfaces/Currency";
import { fetchCurrencies } from "@/services/currencyApi";
import { useEffect, useState } from "react";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<
    CurrencyApiResponse["Valute"] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCurrencies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchCurrencies();
        setCurrencies(data.Valute);
      } catch (error) {
        console.error("Error loading currencies: ", error);
        setError("Не удалось загрузить данные. Попробуйте позже");
      } finally {
        setIsLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  return { currencies, isLoading, error };
};
