//   Pull historical measurements data from graphQL API
export const fetchMeasurementsData = async (metricsArr) => {
  try {
    let input = '';
    metricsArr.forEach((metric, i) => {
      input += `{metricName: "${metric}"}, `;
      console.log(input);
      if (i === metricsArr.length - 1) input = `[${input.slice(0, -2)}]`;
    });

    const response = await fetch('https://react.eogresources.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            {
                getMultipleMeasurements(input:${input}){
                    measurements{
                        metric
                        at
                        value
                        unit
                    }
                }
            }
                `,
      }),
    });
    const { data } = await response.json();

    return data.getMultipleMeasurements;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchCurrentData = async (mName) => {
  try {
    const response = await fetch('https://react.eogresources.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
            getLastKnownMeasurement(metricName: "${mName}") {
                value
                unit
            }
          }
                  `,
      }),
    });

    const { data } = await response.json();
    return data.getLastKnownMeasurement;
  } catch (error) {
    return `${error}`;
  }
};

export const fetchValuesArr = (mArr) => {
  const datasets = [];
  if (mArr.length) {
    for (let i = 0; i < mArr.length; i += 1) {
      datasets[i] = mArr[i].measurements.map((obj) => obj.value);
    }
  }
  return datasets;
};
