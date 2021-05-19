import {useAppSelector } from "../../../app/hooks"
import {fetchSingleFlight, flightsSelector} from '../flightsSlice'
import { useAppDispatch } from "../../../app/hooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const FlightDetails = ({match}) => {
    const dispatch = useAppDispatch();
    const {flight, status} = useAppSelector(flightsSelector); 

    // const flight = useAppSelector(state =>
    //     state.flights.flights.find(flight => flight.id === parseFloat(flightId))   
    // )

    useEffect(() => {
        const {flightId} = match.params;
        dispatch(fetchSingleFlight(flightId))
        
    }, [dispatch, match])

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
                <Link to={`/editFlight/${flight._id}`} className="button">
                    Edit Flight
                </Link>
            </article>
        </section>
    )
}

export default FlightDetails