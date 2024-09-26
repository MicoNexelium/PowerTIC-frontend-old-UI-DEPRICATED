import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const HistoricPowerConsumption = () => {
  // Generate dummy data for the last 60 minutes
  const generateLast60MinutesData = () => {
    const data = [];
    for (let i = 0; i <= 12; i++) {
      data.push({
        name: `-${i * 5} min`, // Labels for every 5-minute interval
        kw: (Math.random() * 10).toFixed(2), // Random kW values between 0 and 10
        kvar: (Math.random() * 5).toFixed(2), // Random KVAr values between 0 and 5
      });
    }
    return data;
  };

  // Set dummy data for the last 60 minutes
  const [data] = useState(generateLast60MinutesData());

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" tick={{ fill: '#ccc', fontSize: 18 }} reversed={true} />
        <YAxis tick={{ fill: '#ccc', fontSize: 18 }} />
        <Tooltip />
        <Legend />
        {/* Bar for KW/h */}
        <Bar dataKey="kw" fill="#69B2A6" name="KW/h" />
        {/* Bar for KVAr/h */}
        <Bar dataKey="kvar" fill="#FFBB28" name="KVAr/h" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoricPowerConsumption;
