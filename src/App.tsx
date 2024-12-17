import { CurrencyTable } from "@/components/CurrencyTable";
import { useCurrencies } from "@/hooks/useCurrencies";

export const App = () => {
  const { currencies, error, isLoading } = useCurrencies();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <CurrencyTable currencies={currencies} />;
};
