import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function Barg() {
  const options = {
  plugins: {
    title: {
      display: true,
      text: 'title',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid:{
        display:false
    },
    },
    y: {
      stacked: true,
      grid:{
        display:false
    },
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5,7,9,6,2,4,8,6,3,6,2,7],
      backgroundColor: '#8a78ff',
    },
    {
      label: 'Dataset 2',
      data: [7,2,9,5,8,3,6,8,9,4,2,8],
      backgroundColor: '#1ecafa',
    },

  ],
};
  return (
    
      <Bar options={options} data={data} className="!h-[100%] !w-[100]" />

  )
}

export default Barg
