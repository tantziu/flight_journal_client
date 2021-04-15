import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import AddFlight from './components/AddFlight';
import FlightsTable from './components/FlightsTable';
import { flightsSelector } from './flightsSlice';
// import {searchFlight } from './flightSlice';
// import styles from './Flights.module.css';



const FlightsPage = () => {

  const { flights, loading, hasErrors} = useAppSelector(flightsSelector)

  console.log("Flights:", flights)
  return (
    <section className="FlightsPage">
      <h1>Flight Journal</h1>
      <AddFlight/>
      <FlightsTable flights={flights}/>
    </section>

    
  );
}

export default FlightsPage
