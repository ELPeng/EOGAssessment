import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import { fetchCurrentData } from '../api';

const Cards = ({ mNames }) => {
  if (!mNames.length) return 'Loading...';
  return (
    <div>
      <Grid container spacing={2}>
        {mNames.map((metric) => (
          <Grid item component={Card} xs={4} md={3}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {metric}
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {/* {fetchCurrentData(metric).value} */}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
