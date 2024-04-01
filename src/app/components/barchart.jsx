"use client";
import { useState, useEffect, } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarElement
    
} from 'chart.js';

 // Chart options with scales defined separately
 ChartJS.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarElement
);


export default function Barchart() {
    const [jsonData, setJsonData] = useState([]);

   // Fetch the data
   useEffect(() => {
    fetch('https://alexworldwid.github.io/weekly-spending-component/public/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => { 
        console.log('fetch data:', data)
        setJsonData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
    }, []);

    // prepare the barchart data
    const prepareChartData = (jsonData) => {
        const dataArray = jsonData.data;
        const today = new Date().toLocaleDateString('en-US', {weekday: 'short'}).toLowerCase();
        const labels = jsonData.map(entry => entry.day);
        const data = jsonData.map(entry => entry.amount);
        const backgroundColor = jsonData.map(entry => entry.day === today ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)');
        const hoverBackgroundColors = jsonData.map(entry => entry.day === today ? 'hsla(186, 34%, 60%, 0.5)' : 'hsla(10, 79%, 65%, 0.5)');

        return {
            labels: labels,
            datasets: [
                {
                    label: "",
                    backgroundColor: backgroundColor,
                    borderColor: 'none',
                    hoverBackgroundColor: hoverBackgroundColors,
                    data: data,
                },
            ]
        };
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false // This removes the numbers from the y-axis
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return ( 
        <div className="bar-container">
            <Bar className='bar' data={prepareChartData(jsonData)} options={options} />
        </div>
     );
}
 
