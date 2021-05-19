import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import FlightsTable from './components/FlightsTable';
import { flightsSelector, fetchFlights} from './flightsSlice';
// import styles from './Flights.module.css';

const FlightsPage = () => {
  const dispatch = useAppDispatch( )
  const { flights, status, error} = useAppSelector(flightsSelector)
  
  // const flights:IFlight[] = useAppSelector(flightsSelector)
  // const flightStatus = useAppSelector(state => state.flights.loading)

  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchFlights())
  }, [status, dispatch])

  let content;

  if (status === 'loading') {
    content = <div className='loader'>Loading...</div>
  } else if (status === 'succeeded') {
      content = <FlightsTable flights={flights}/>
  } else if (status === 'failed') {
      content = <div>{error}</div>
  }
  return (
    <section className="FlightsPage">      
      {content}
    </section>
  );
}

export default FlightsPage
