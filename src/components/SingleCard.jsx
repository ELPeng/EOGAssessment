import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { fetchCurrentData } from '../api';

const SingleCard = ({ metric }) => {
  if (!metric) return 'Loading...';
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCurrentData(metric)
        .then((data) => setCurrentData(data))
        .catch((error) => console.log(error));
    }, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <Grid item component={Card} m={4}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {metric}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            {currentData.value} {currentData.unit}
          </Typography>
        </CardContent>
      </Grid>
    </div>
  );
};

export default SingleCard;
