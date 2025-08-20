import React, {useEffect, useRef, useState} from "react";
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import {PiBankDuotone, PiBasketDuotone, PiClipboardTextDuotone, PiCurrencyCircleDollarDuotone} from "react-icons/pi";
import Cookies from "js-cookie";
import axios from "axios";

interface Data{
    itemCount: number,
    emptyItemCount: number,
    orderCount: number,
    totalIncome: number,
    todayTotalAmount: number,
    userCount: number
}

const AdminDashboard: React.FC = () => {

    const [countedData, setCountedData] = useState<Data>(null)

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

    useEffect(() => {

        const config = {
            headers: {
                'Authorization': Cookies.get('tk')
            }
        };

        axios.get('http://localhost:9000/details/all',config)
            .then(res => {
                // alert('Order saved 🎉'+res.data.data)
                setCountedData(res.data.data)
            })
            .catch(error => {
                console.log(error)
                // alert("order not saved")
            })
    }, []);

    return(
        <>

            <section className={"bg-white w-full h-full flex flex-row"}>


                <div className={'w-[50%] bg-pink-200/0 h-full flex flex-row gap-3'}>

                    <div
                        className={"w-full h-[45%] p-3 rounded-xl" +
                            " bg-[url(../src/assets/images/admin-background.jpeg)] object-fill bg-center bg-cover flex flex-col-reverse"}>


                        <h1 className={"text-white font-Lex text-[20px] "}>NextGenIt Admin view - Manage everything from here</h1>
                        <p className={"text-white font-Lex font-bold text-[50px] "}>Welcome</p>

                    </div>

                    <div className={'bg-yellow-300/0 h-[400px] w-[600px] rounded-lg hidden'}>
                        <Line ref={chartRef} data={data} options={options} width={600} height={400}/>
                    </div>

                </div>

                {/*-------------------Card section--------------------*/}


                <div className={'w-[50%] bg-blue-200/0 h-full flex flex-col justify-evenly'}>

                    <div className={"w-full flex justify-evenly items-center"}>

                        <div
                            className={'bg-yellow-300/70 text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Total Income</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiBankDuotone size={60} color={"#FCC255"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>Rs {countedData ? countedData.totalIncome : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>

                        <div
                            className={'bg-yellow-300/70 text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Today Income</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiCurrencyCircleDollarDuotone size={70} color={"#FCC255"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>Rs {countedData ? countedData.todayTotalAmount : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>
                    </div>

                    <div className={"w-full flex justify-evenly items-center"}>

                        <div
                            className={'bg-[#F2416D] text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Total Items</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiBasketDuotone size={60} color={"#FB7495"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>{countedData ? countedData.itemCount : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>

                        <div
                            className={'bg-[#1967D2] text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Empty Items</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiClipboardTextDuotone size={60} color={"#3FB9FF"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>{countedData ? countedData.emptyItemCount : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>
                    </div>

                    <div className={"w-full flex justify-evenly items-center"}>

                        <div
                            className={'bg-[#1DBCA5] text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Total Orders</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiClipboardTextDuotone size={60} color={"#60E1A4"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>{countedData ? countedData.orderCount : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>

                        <div
                            className={'bg-[#1967D2] text-white h-[170px] w-[290px] flex flex-col rounded-lg py-1 px-3 font-[600] text-[25px] font-Poppins'}>

                            <h1>Total Users</h1>
                            <div className={"flex flex-row items-center my-auto"}>
                                <div>
                                    <PiClipboardTextDuotone size={60} color={"#3FB9FF"}/>
                                </div>

                                <div className={'text-white text-xl'}>
                                    <h1>{countedData ? countedData.userCount : 0}</h1>
                                </div>
                            </div>

                            {/*<div className={'text-white text-xl'}>*/}
                            {/*    <h1>Rs 500000</h1>*/}
                            {/*</div>*/}

                        </div>
                    </div>

                </div>

            </section>

        </>
    )

}

export default AdminDashboard;