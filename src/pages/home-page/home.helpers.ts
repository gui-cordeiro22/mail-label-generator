// Types
import { CustomerChartHelpersData } from "@/components/compositions/customer-chart/customer-chart.types";

export const customersReportBuilder = (clients: CustomerChartHelpersData[]) => {
  const map: Record<string, number> = {};

  clients.forEach((client) => {
    const uf = client.uf;

    map[uf] = (map[uf] || 0) + 1;
  });

  return Object.entries(map).map(([uf, clients]) => ({
    uf,
    clients,
  }));
};
