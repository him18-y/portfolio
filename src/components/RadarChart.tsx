import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

interface SkillProps {
    options: any;
    data: any;
}

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart: React.FC<SkillProps> = ({ options, data }) => {
    return(
        <>
            <Radar options={options} data={data} />
        </>
    );
};

export default RadarChart;