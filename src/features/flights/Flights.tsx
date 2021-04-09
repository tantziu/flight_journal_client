import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {searchFlight } from './flightSlice';
// import styles from './Flights.module.css';



export const Flights = () => {

  // const flight = useAppSelector((state) => state.flight.value)
  // const dispatch = useAppDispatch()

  const [flight, setFlight] = useState('');

  const onFlightChanged = (e:React.FormEvent<HTMLInputElement>):void => 
    setFlight((e.target as HTMLInputElement).value);

  const onSearchFlightClicked = () => {console.log("search")}

  return (
    <section className="Flights">
      <h1>Flight search</h1>
      <form>
        <label htmlFor="flight">Post Title:</label>
        <input
          type="text"
          id="flight"
          name="flight"
          value={flight}
          onChange={onFlightChanged}
        />
      </form>

      <button type="button" onClick={onSearchFlightClicked} disabled={false}>
          Search
      </button>

      <div className="Result">
        {/* {content} */}
      </div>
    </section>

    
  );
}
