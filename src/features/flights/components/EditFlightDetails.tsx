import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {flightUpdated, selectFlightById, IFlight} from '../flightsSlice'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditFlightDetails = ({match}) => {
    const {flightId} = match.params;
    const flight = useAppSelector(state => selectFlightById(state, parseFloat(flightId)));

    const [name, setName] = useState(flight.name)
    const [destination, setDestination] = useState(flight.destination)
    const [origin, setOrigin] = useState(flight.origin)
    const [date, setDate] = useState(flight.date)

    const dispatch = useAppDispatch()
    const history = useHistory();

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
        dispatch(flightUpdated({
            id: parseFloat(flightId),
            name,
            destination,
            origin,
            date

        }))
        history.push(`flights/${flightId}`);

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
                <label htmlFor="flightDestination">Destination:</label>
                <input
                    type="text"
                    id="flightDestination"
                    name="flightDestination"
                    value={destination}
                    onChange={onDestinationtChanged}
                />
                <label htmlFor="flightOrigin">From:</label>
                <input
                    type="text"
                    id="flightOrigin"
                    name="flightOrigin"
                    value={origin}
                    onChange={onOriginChanged}
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