import * as React from 'react';
import { BarPlot, BarChart as MuiBarChart } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1111, 2222, 3333, 4444, 5555];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

export const BarChart = () => {
    return (
        <MuiBarChart
            width={500}
            height={300}
            series={[{ data: uData, type: 'bar' }]}
            xAxis={[{ scaleType: 'band', data: xLabels }]}
            yAxis={[{ tickLabelStyle: { display: 'none' }, disableLine: true, disableTicks: true, }]}
        >
            <BarPlot />
        </MuiBarChart>
    );
}
