import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + 40 + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function WorkerGraph(props) {
  let riskPercentage = props.riskPercentage;
  let color = '#000';

  if (riskPercentage < 34)
    color = '#2CD06B'
  else if (riskPercentage > 66)
    color = '#D93636'
  else 
    color = '#FBD813'

  console.log(color);

  return (
    <PieChart
      colors={[color]}
      series={[
        {
          cx: 40,
          startAngle: 0,
          endAngle: (360 * riskPercentage) / 100,
          innerRadius: 25,
          outerRadius: 40,
          data: [
            { id: 0, value: 20 },
          ],
        },
      ]}
      width={90}
      height={90}
    > <PieCenterLabel>{riskPercentage}</PieCenterLabel>
    </PieChart>
  );
}