import {IFlight, deleteFlight} from '../flightsSlice';
import { useAppDispatch } from "../../../app/hooks";
import { Link } from "react-router-dom";

type FlightsTableProps = {
    flights: IFlight[]
}

const FlightsTable = ({flights}:FlightsTableProps) => {
    const dispatch = useAppDispatch()

    const onDismiss = (id?:string) => {
        if (id != undefined) {
            dispatch(deleteFlight(id))
        }    
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
                <div key={flight._id} className="table-row">
                    <span style={{width:'15%'}}>{flight.name}</span>
                    <span style={{width:'15%'}}>{flight.origin}</span>
                    <span style={{width:'15%'}}>{flight.destination}</span>
                    <span style={{width:'20%'}}>{flight.date}</span>
                    <span style={{width:'15%'}}>
                        {/* <button
                            // onClick={() => onDismiss(item.objectID)}
                            className="button-inline"
                        > 
                            More
                        </button> */}
                        <Link to={`/flights/${flight._id}`} className='button'>More</Link>
                    </span>
                    <span style={{width:'20%'}}>
                        <button
                            onClick={() => onDismiss(flight._id)}
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
