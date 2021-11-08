import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NowWhat from './components/NowWhat';
import MenuSelect from './components/MenuSelect';
import Chart from './components/Chart';

import { fetchMeasurementsData } from './api';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => {
  const [metricNames, setMetricNames] = useState(['oilTemp']);
  const [measurementsData, setMeasurementsData] = useState([]);

  useEffect(async () => {
    setMeasurementsData(await fetchMeasurementsData(metricNames));
  }, [metricNames]);

  console.log(measurementsData);
  //   const arr = fetchValuesArr(measurementsData);

  //   console.log(arr);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        <MenuSelect metricNames={metricNames} setMetricNames={setMetricNames} />
        <NowWhat />
        <ToastContainer />
        <Chart metricNames={metricNames} mData={measurementsData} />
      </Wrapper>
    </MuiThemeProvider>
  );
};

export default App;
