import {IFlight, flightRemoved} from '../flightsSlice';
import { useAppDispatch } from "../../../app/hooks";

type FlightsTableProps = {
    flights: IFlight[]
}

const FlightsTable = ({flights}:FlightsTableProps) => {
    const dispatch = useAppDispatch()

    const onDismiss = (id:number) => {
        dispatch(flightRemoved(id))
    }

    return (
        <div className='table'>
            <h2>Past flights</h2>
            <div className='table-header'>
                <span style={{width:'15%'}}>Name</span>
                <span style={{width:'15%'}}>Origin</span> 
                <span style={{width:'15%'}}>Destination</span>  
                <span style={{width:'20%'}}>Date</span>  
                <span style={{width:'15%'}}>Details</span>    
                <span style={{width:'20%'}}>Archive</span>  
            </div>
            
            
            {flights.map(flight => 
                <div key={flight.id} className="table-row">
                    <span style={{width:'15%'}}>{flight.name}</span>
                    <span style={{width:'15%'}}>{flight.origin}</span>
                    <span style={{width:'15%'}}>{flight.destination}</span>
                    <span style={{width:'20%'}}>{flight.date}</span>
                    <span style={{width:'15%'}}>
                        <button
                            // onClick={() => onDismiss(item.objectID)}
                            className="button-inline"
                        > 
                            More
                        </button>
                    </span>
                    <span style={{width:'20%'}}>
                        <button
                            onClick={() => onDismiss(flight.id)}
                            className="button-inline"
                        > 
                            Dismiss
                        </button>
                    </span>
                </div>
            )}
            
        </div>     
    )
}


export default FlightsTable
