// Dependencies
import { FunctionComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
} from "recharts";

import { theme } from "@/styles/theme";

// Types
import { CustomerChartProps } from "./customer-chart.types";

export const CustomerChart: FunctionComponent<CustomerChartProps> = ({
    data,
}) => {
    const formattedData = [...data].sort((a, b) => b.clients - a.clients);

    return (
        <ResponsiveContainer width="100%" height={300} debounce={50}>
            <BarChart data={formattedData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="uf" type="category" fontWeight="bold" />

                <Bar
                    dataKey="clients"
                    fill={theme.palette.colors["warning100"]}
                    isAnimationActive={false}
                >
                    <LabelList
                        dataKey="clients"
                        position="right"
                        formatter={(value) =>
                            !!value && Number(value) > 1
                                ? `${value} clientes`
                                : `${value} cliente`
                        }
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};
