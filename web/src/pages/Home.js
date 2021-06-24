import React from 'react';
import '../App.css';
import Slideshow from './slideshow';
import './Home.css'
import MediaCard from'./pics'
import { Grid } from "@material-ui/core"
import Footer from './footer'


export default function home() {
  return (
        <>

      <h2 className='home'>2 mains 10 doigts </h2>
      <Slideshow />
      <h2 className='pics'>Mes photos </h2>

      <Grid container spacing= {0}>
          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
          <MediaCard />
          </Grid>
      </Grid>
      <Footer />
    </>
  );
}
