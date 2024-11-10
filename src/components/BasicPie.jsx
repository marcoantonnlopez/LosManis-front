import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function BasicPie() {

  const data = [
    { id: 0, value: 10, label: 'Alto Riesgo' },
    { id: 1, value: 15, label: 'Medio Riesgo' },
    { id: 2, value: 20, label: 'Bajo Riesgo' },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <PieChart
      colors={['#D93636', '#FBD813', '#2CD06B']}
      series={[
        {
          arcLabel: getArcLabel,
          cx: 200,
          innerRadius: 60,
          outerRadius: 180,
          data
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 30,
          fontWeight: 'bold',
        },
      }}
      width={700}
      height={400}
    />
  );
}