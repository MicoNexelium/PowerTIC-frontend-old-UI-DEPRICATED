import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const HistoricRealPower = () => {
  // Generate dummy data for the last 60 minutes
  const generateLast60MinutesData = () => {
    const data = [];
    for (let i = 0; i <= 12; i++) {
      const faseA = (Math.random() * 8).toFixed(2); // Random values between 0 and 8 for Fase A
      const faseB = (Math.random() * 8).toFixed(2); // Random values between 0 and 8 for Fase B
      const faseC = (Math.random() * 8).toFixed(2); // Random values between 0 and 8 for Fase C
      const promedio = (((+faseA + +faseB + +faseC) / 3).toFixed(2)); // Calculate average phase value
      data.push({
        name: `-${i * 5} min`, // Labels for every 5-minute interval
        faseA: +faseA,
        faseB: +faseB,
        faseC: +faseC,
        promedio: +promedio,
      });
    }
    return data;
  };

  // Set dummy data for the last 60 minutes
  const [data] = useState(generateLast60MinutesData());

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#69B2A6', marginBottom: '20px' }}>Potencia Real</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fill: '#ccc', fontSize: 18 }} reversed={true} />
          <YAxis tick={{ fill: '#ccc', fontSize: 18 }} domain={[0, 8]} />
          <Tooltip />
          <Legend />
          {/* Líneas de tendencia para el promedio y cada fase */}
          <Line type="monotone" dataKey="promedio" stroke="#69B2A6" name="Promedio" strokeWidth={2} />
          <Line type="monotone" dataKey="faseA" stroke="#83C5B1" name="Fase A" strokeWidth={2} />
          <Line type="monotone" dataKey="faseB" stroke="#FFBB28" name="Fase B" strokeWidth={2} />
          <Line type="monotone" dataKey="faseC" stroke="#FF8042" name="Fase C" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricRealPower;