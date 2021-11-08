import React from 'react';
import { fetchValuesArr } from '../api';
// import { Line } from 'react-chartjs-2';

const Chart = ({ metricNames, mData }) => {
  if (!mData) return 'Loading....';
  console.log(mData);
  console.log(metricNames);

  // Retrieves time array to be set as X-Axis
  const xVals = mData[0].measurements.map((data) => data.at);
  console.log(xVals);
  const dataArr = fetchValuesArr(mData);
  console.log(dataArr);

  //   const datasets = dataArr.map((set, i) => ({
  //     label: metricNames[i],
  //     data: set,
  //     fill: false,
  //     borderColor: 'rgb(75, 192, 192)',
  //     tension: 0.5,
  //   }));

  //   const data = {
  //     labels: xVals,
  //     datasets,
  //   };

  //   const options = {
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: 'Chart Title',
  //       },
  //     },
  //     scales: {
  //       x: {
  //         type: 'linear',
  //       },
  //       y: {
  //         type: 'linear',
  //       },
  //     },
  //     elements: {
  //       point: {
  //         radius: 0,
  //       },
  //     },
  //   };

  return (
    <>
      <div className="header">
        <h1 className="title">Multi Axis Line Chart</h1>
      </div>
      {/* <Line data={data} options={options} /> */}
    </>
  );
};

export default Chart;
