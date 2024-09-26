import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Generate dummy data for each month
const generateMonthlyData = () => {
  return [
    { name: 'Ene', value: (Math.random() * 100).toFixed(2) },
    { name: 'Feb', value: (Math.random() * 100).toFixed(2) },
    { name: 'Mar', value: (Math.random() * 100).toFixed(2) },
    { name: 'Abr', value: (Math.random() * 100).toFixed(2) },
    { name: 'May', value: (Math.random() * 100).toFixed(2) },
    { name: 'Jun', value: (Math.random() * 100).toFixed(2) },
    { name: 'Jul', value: (Math.random() * 100).toFixed(2) },
    { name: 'Ago', value: (Math.random() * 100).toFixed(2) },
    { name: 'Sept', value: (Math.random() * 100).toFixed(2) },
    { name: 'Oct', value: (Math.random() * 100).toFixed(2) },
    { name: 'Nov', value: (Math.random() * 100).toFixed(2) },
    { name: 'Dic', value: (Math.random() * 100).toFixed(2) },
  ];
};

const data = generateMonthlyData();

export default function ConsumptionHistory() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 50, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#69B2A6" />
      </BarChart>
    </ResponsiveContainer>
  );
};
