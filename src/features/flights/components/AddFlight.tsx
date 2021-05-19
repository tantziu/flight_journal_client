import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { IFlight, addNewFlight } from "../flightsSlice";
import { useHistory } from "react-router-dom";

// type AddFlightProps = {
//     onFlightAdded:(flight:IFlight | any) => void
// }

const AddFlight = (/*{onFlightAdded}:AddFlightProps*/) => {
    const [name, setName] = useState('')
    const [destination, setDestination] = useState('')
    const [origin, setOrigin] = useState('')
    const [date, setDate] = useState('')
    // const [flight, setFlight] = useState<IFlight | {}>()
    const dispatch = useAppDispatch()
    const history = useHistory()
    
    const onNameChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setName((e.target as HTMLInputElement).value)
    const onDestinationtChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setDestination((e.target as HTMLInputElement).value)
    const onOriginChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setOrigin((e.target as HTMLInputElement).value)
    const onDateChanged = (e:React.FormEvent<HTMLInputElement>) => 
        setDate((e.target as HTMLInputElement).value)

    const onSaveFlightClicked = /*async*/ () => {
        const newFlight:IFlight = {
            // _id: Math.random(),
            name: name,
            destination: destination,
            origin: origin,
            date: date
        }
        // dispatch(flightAdded(newFlight))
        dispatch(addNewFlight(newFlight))
        // setName('')
        // setDestination('')
        // setOrigin('')
        // setDate('')
        history.push('/')
    }

    return (
        <div className='addFlight'>
            <h2>Add new flight</h2>
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
        </div>     
    )
}

export default AddFlight;