import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const HistoricPF = () => {
  // Generate the last 60 minutes data
  const generateLast60MinutesData = () => {
    const data = [];
    for (let i = 0; i <= 12; i++) {
      data.push({
        name: `-${i * 5} min`,
        promedio: (0.90 + Math.random() * 0.10).toFixed(2), // Random value between 0.90 and 1.00
      });
    }
    return data;
  };

  // Set dummy data for the last 60 minutes
  const [data] = useState(generateLast60MinutesData());

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" tick={{ fill: '#ccc', fontSize: 18 }} />
        <YAxis
          tick={{ fill: '#ccc', fontSize: 18 }}
          domain={[0.90, 1.0]} // Set domain to match expected power factor range
          ticks={[0.92, 0.94, 0.96, 0.98, 1.00]} // Customize Y-axis ticks
        />
        <Tooltip />
        <Legend />
        {/* Line for the promedio */}
        <Line type="monotone" dataKey="promedio" stroke="#69B2A6" name="Promedio" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HistoricPF;