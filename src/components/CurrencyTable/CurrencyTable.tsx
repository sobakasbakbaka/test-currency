import { CurrencyApiResponse } from "@/interfaces/Currency";
import { Table } from "@mantine/core";
import { CurrencyRow } from "./CurrencyRow";

type CurrencyTableProps = {
  currencies: CurrencyApiResponse["Valute"] | null;
};

export const CurrencyTable = (props: CurrencyTableProps) => {
  const { currencies } = props;

  if (!currencies) {
    return null;
  }

  const data = Object.entries(currencies);

  return (
    <Table striped withColumnBorders highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Код</Table.Th>
          <Table.Th>Название</Table.Th>
          <Table.Th>Номинал</Table.Th>
          <Table.Th>Текущая цена</Table.Th>
          <Table.Th>Предыдущая цена</Table.Th>
          <Table.Th>Изменения</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map(([code, currency]) => (
          <CurrencyRow key={currency.ID} code={code} currency={currency} />
        ))}
      </Table.Tbody>
    </Table>
  );
};
