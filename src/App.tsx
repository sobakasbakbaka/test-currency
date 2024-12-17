import { useEffect, useState } from "react";
import { fetchCurrencies } from "@/services/currencyApi";
import { CurrencyApiResponse } from "@/interfaces/Currency";
import { Table } from "@mantine/core";

export const App = () => {
  const [currencies, setCurrencies] = useState<
    CurrencyApiResponse["Valute"] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        setCurrencies(data.Valute);
        console.log(data.Valute);
      } catch (error) {
        console.error("Error loading currencies", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCurrencies();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {JSON.stringify(currencies)}
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
      </Table>
    </div>
  );
};
