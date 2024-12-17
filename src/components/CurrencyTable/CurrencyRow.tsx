import { CurrencyData } from "@/interfaces/Currency";
import { Table } from "@mantine/core";

type CurrencyRowProps = {
  code: string;
  currency: CurrencyData;
};

export const CurrencyRow = ({ code, currency }: CurrencyRowProps) => {
  const change = Number((currency.Value - currency.Previous).toFixed(2));
  const textColor =
    change > 0 ? "var(--mantine-color-green-5)" : "var(--mantine-color-red-5)";

  return (
    <Table.Tr key={currency.ID}>
      <Table.Td>{code}</Table.Td>
      <Table.Td>{currency.Name}</Table.Td>
      <Table.Td>{currency.Nominal}</Table.Td>
      <Table.Td>{currency.Value.toFixed(2)}</Table.Td>
      <Table.Td>{currency.Previous.toFixed(2)}</Table.Td>
      <Table.Td style={{ color: textColor }}>{change}</Table.Td>
    </Table.Tr>
  );
};
