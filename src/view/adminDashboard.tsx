import React, {useEffect, useRef} from "react";
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';

const AdminDashboard: React.FC = () => {

    const chartRef = useRef<Chart<'line'>>(null);

    const data: {
        datasets: {
            backgroundColor: string;
            borderColor: string;
            tension: number;
            data: number[];
            label: string;
            fill: boolean
        }[];
        labels: string[]
    } = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Trends',
                data: [20, 31, 54, 45, 59, 72, 80],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Placeholder, will be replaced with gradient
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.4,
            },
        ],
    };

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Latest Trends',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
            gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');

            data.datasets[0].backgroundColor = gradient;
            chart.update();
        }
    }, []);


    return(
        <>

            <section className={"bg-white  w-full min-h-full flex flex-col"}>

                {/*-------------------Card section--------------------*/}
                <div>

                    <div className={'bg-yellow-300 h-[150px] w-[270px] rounded-lg'}>

                    </div>

                    <div className={'bg-yellow-300/0 h-[400px] w-[600px] rounded-lg'}>
                        <Line ref={chartRef} data={data} options={options} width={600} height={400}/>
                    </div>

                </div>


            </section>

        </>
    )

}

export default AdminDashboard;