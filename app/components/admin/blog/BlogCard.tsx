import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './ui';

export default function BlogCard({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.textContent}
        >
          <Grid item xs={12} md={3} lg={2}>
            <CardMedia
              image=""
              title={data.alt}
              className={classes.cardImage}
            />
          </Grid>
          <Grid item lg={7} md={5}>
            <Typography className={classes.title}>{data.title}</Typography>
            <Typography className={classes.description}>
              {data.description}
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className={classes.rightContent}
          >
            <Typography className={classes.cardText}>{data.type}</Typography>
            <Box padding="10px 0" display="flex" justifyContent="space-between">
              <Button className={classes.cardButton}>
                {data.type === 'Draft' ? 'Publish' : 'Unpublish'}
              </Button>
              <Button className={classes.cardButton}>Edit</Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography className={classes.archiveText}>
                {data.type === 'Published' ? 'Archive' : ''}
              </Typography>
              <Typography className={classes.cardText}>{data.date}</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
