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

// import { fetchMeasurementsData } from './api';

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
  // Pull historical measurements data from graphQL API
  const fetchMeasurementsData = async (metric) => {
    try {
      const response = await fetch('https://react.eogresources.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
                  {
                      getMeasurements(input:{metricName: "${metric}"}){
                          metric
                          at
                          value
                          unit
                      }
                  }
                      `,
        }),
      });
      const { data } = await response.json();
      console.log(data);
      console.log(metricNames);
      setMeasurementsData(data.getMeasurements);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await fetchMeasurementsData(metricNames[0]);
  }, [metricNames]);

  console.log(measurementsData);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        <MenuSelect
          setMeasurementsData={setMeasurementsData}
          metricNames={metricNames}
          setMetricNames={setMetricNames}
        />
        <NowWhat />
        <ToastContainer />
        <Chart data={measurementsData} />
      </Wrapper>
    </MuiThemeProvider>
  );
};

export default App;
