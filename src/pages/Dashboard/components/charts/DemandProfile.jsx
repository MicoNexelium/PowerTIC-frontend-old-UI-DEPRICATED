import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Generate dummy data for each month
const generateMonthlyData = () => {
  return [
    { name: 'Enero', value: (Math.random() * 100).toFixed(2) },
    { name: 'Febrero', value: (Math.random() * 100).toFixed(2) },
    { name: 'Marzo', value: (Math.random() * 100).toFixed(2) },
    { name: 'Abril', value: (Math.random() * 100).toFixed(2) },
    { name: 'Mayo', value: (Math.random() * 100).toFixed(2) },
    { name: 'Junio', value: (Math.random() * 100).toFixed(2) },
    { name: 'Julio', value: (Math.random() * 100).toFixed(2) },
    { name: 'Agosto', value: (Math.random() * 100).toFixed(2) },
    { name: 'Septiembre', value: (Math.random() * 100).toFixed(2) },
    { name: 'Octubre', value: (Math.random() * 100).toFixed(2) },
    { name: 'Noviembre', value: (Math.random() * 100).toFixed(2) },
    { name: 'Diciembre', value: (Math.random() * 100).toFixed(2) },
  ];
};

const data = generateMonthlyData();

const DemandProfile = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 50, left: 50, bottom: 20 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#69B2A6" dot={{ fill: '#69B2A6', strokeWidth: 2, r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemandProfile;
