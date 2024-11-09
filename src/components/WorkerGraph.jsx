import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function WorkerGraph(props) {
  let color = props.color;
  let angle = props.angle;
  let risk = props.risk;

  return (
    <PieChart
      colors={['#D93636', '#FBD813', '#2CD06B']}
      series={[
        {
          cx: 30,
          innerRadius: 18,
          outerRadius: 30,
          data: [
            { id: 0, value: 20 },
          ],
        },
      ]}
      width={90}
      height={90}
    >
    </PieChart>
  );
}