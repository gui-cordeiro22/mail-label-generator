// Dependencies
import { FunctionComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
} from "recharts";

// Types
import { CustomerChartProps } from "./customer-chart.types";

export const CustomerChart: FunctionComponent<CustomerChartProps> = ({
    data,
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="uf" />
                <YAxis />

                <Bar dataKey="clients">
                    <LabelList
                        dataKey="clients"
                        position="top"
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
