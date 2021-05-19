import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {editFlight, fetchSingleFlight, flightsSelector} from '../flightsSlice'
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditFlightDetails = ({match}) => {
    // const {flightId} = match.params;
    const dispatch = useAppDispatch();
    const history = useHistory();
    // const flight = useAppSelector(singleFlightSelector);
    const {flight, status} = useAppSelector(flightsSelector)

    // useEffect(() => {
    //     if (status === 'updated') {
    //         const {flightId} = match.params;
    //         dispatch(fetchSingleFlight(flightId))
    //     }
        
    // }, [dispatch, match])

    const [name, setName] = useState(flight.name)
    const [destination, setDestination] = useState(flight.destination)
    const [origin, setOrigin] = useState(flight.origin)
    const [date, setDate] = useState(flight.date)

    

    const onNameChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setName((e.target as HTMLInputElement).value)
    const onDestinationtChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setDestination((e.target as HTMLInputElement).value)
    const onOriginChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setOrigin((e.target as HTMLInputElement).value)
    const onDateChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setDate((e.target as HTMLInputElement).value)

    


    const onSaveFlightClicked = () => {
        if (name && destination && origin && date)
        dispatch(editFlight({
            _id: flight._id,
            name,
            destination,
            origin,
            date

        }))
        history.push(`/flights/${flight._id}`);


    }

    if (!flight) {
        return (
            <section>
                <h2>Flight not found!</h2>
            </section>
        );
    }

    return (
        <section>
            <h2>Edit Flight</h2>
            <form>
                <label htmlFor="flightName">Flight Name:</label>
                <input
                    type="text"
                    id="flightName"
                    name="flightName"
                    placeholder='LX1498'
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor="flightOrigin">From:</label>
                <input
                    type="text"
                    id="flightOrigin"
                    name="flightOrigin"
                    value={origin}
                    onChange={onOriginChanged}
                />
                <label htmlFor="flightDestination">Destination:</label>
                <input
                    type="text"
                    id="flightDestination"
                    name="flightDestination"
                    value={destination}
                    onChange={onDestinationtChanged}
                />
                <label htmlFor="flightDate">Date:</label>
                <input
                    type="text"
                    id="fligflightDateht"
                    name="flightDate"
                    value={date}
                    onChange={onDateChanged}
                />
            </form>
            <button type="button" onClick={onSaveFlightClicked} disabled={false}>
                Save flight
            </button>
        </section>
    )
}

export default EditFlightDetails