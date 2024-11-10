import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      colors={['#D93636', '#FBD813', '#2CD06B']}
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          cx: 200,
          innerRadius: 60,
          outerRadius: 180,
          data: [
            { id: 0, value: 10, label: 'Alto Riesgo' },
            { id: 1, value: 15, label: 'Medio Riesgo' },
            { id: 2, value: 20, label: 'Bajo Riesgo' },
          ],
        },
      ]}
      width={800}
      height={400}
    />
  );
}