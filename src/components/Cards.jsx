import React from 'react';
import Grid from '@material-ui/core/Grid';
import SingleCard from './SingleCard';

const Cards = ({ mNames }) => {
  if (!mNames.length) return 'Loading...';

  return (
    <div>
      <Grid container>
        {mNames.map((metric) => (
          <SingleCard metric={metric} key={`id-${metric}`} />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
