export const fetchMeasurementsData = async (metric) => {
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
    // if (!data) return;
    // return data;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchMeasurementsData1() {
  try {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
              query{
                characters {
                  results {
                    name
                  }
                }
            }
                  `,
      }),
    });
    const names = await response.json();
    console.log(names);
    // return names;
  } catch (error) {
    console.log(error);
  }
}
