import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {flightUpdated, selectFlightById} from '../flightsSlice'
import { Link } from "react-router-dom";


const FlightDetails = ({match}) => {
    const dispatch = useAppDispatch()
    const {flightId} = match.params;
    const flight = useAppSelector(state => selectFlightById(state, parseFloat(flightId)));
    // const flight = useAppSelector(state =>
    //     state.flights.flights.find(flight => flight.id === parseFloat(flightId))   
    // )

    if (!flight) {
        return (
            <section>
                <h2>Flight not found!</h2>
            </section>
        );
    } 

    return (
        <section>
            <article className='flight'>
                <h2>Flight number {flight.name}</h2>
                <p>From: {flight.origin}</p>
                <p>To: {flight.destination}</p>
                <p>Date: {flight.date}</p>
                <p>Other info</p>
                <Link to={`/editFlight/${flight.id}`} className="button">
                    Edit Flight
                </Link>
            </article>
        </section>
    )
}

export default FlightDetails