import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

import { fetchValuesArr } from '../api';

const Chart = ({ metricNames, mData }) => {
  if (!mData || mData.length === 0) return 'Loading....';

  // Retrieves time array to be set as X-Axis
  const xVals = mData[0].measurements.map((data) => new Date(data.at));
  const dataArr = fetchValuesArr(mData);

  function getYAxis(mName) {
    if (mName && mName.includes('injValveOpen')) return 'y2';
    return 'y1';
  }

  const colorsArr = ['#DC143C', '#FFA500', '#32CD32', '#20B2AA', '#191970', '#9400D3'];
  const datasets = dataArr.map((set, i) => ({
    label: metricNames[i],
    data: set,
    fill: false,
    borderColor: colorsArr[i],
    borderWidth: 1,
    tension: 0.5,
    yAxisID: getYAxis(metricNames[i]),
  }));

  const data = {
    labels: xVals,
    datasets,
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Historical Data Measurements',
        font: {
          size: 24,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time of day',
          font: {
            size: 16,
          },
        },
        type: 'time',
        time: {
          unit: 'hour',
        },
      },
      y1: {
        title: {
          display: true,
          text: 'Temperature (F) / Pressure (PSI)',
          font: {
            size: 14,
          },
        },
        type: 'linear',
        position: 'left',
      },
      y2: {
        title: {
          display: true,
          text: 'Valve Open (%)',
          font: {
            size: 14,
          },
        },
        type: 'linear',
        position: 'right',
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return <Line style={{ padding: '20px' }} data={data} options={options} />;
};

export default Chart;
