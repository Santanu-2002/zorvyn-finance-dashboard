import {LineChart, Line, XAxis,YAxis, Tooltip,ResponsiveContainer} from "recharts";
import { useSelector } from "react-redux";
import "./summaryChart.css";

const getChartData = (data) => {
  let balance = 0;

  return data.map((item) => {
    balance += item.type === "income" ? item.amount : -item.amount;

    return {
      date: item.date.slice(5),
      balance
    };
  });
};

export default function BalanceChart() {
    const data = useSelector((state)=> state.calculator.transactions);
    const chartData = getChartData(data || []);
    return (
        <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="balance"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
    }