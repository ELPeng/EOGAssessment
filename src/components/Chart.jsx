import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
    scales: {
      x: {
        type: 'linear',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Multi Axis Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default Chart;
