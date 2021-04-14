import {IFlight} from '../flightsSlice';

type FlightsTableProps = {
    flights: IFlight[]
}

const FlightsTable = ({flights}:FlightsTableProps) => (
    <div className='table'>
        <h2>Past flights</h2>
        <div className='table-header'>
            <span style={{width:'15%'}}>Number</span>  
            <span style={{width:'15%'}}>To</span>  
            <span style={{width:'15%'}}>From</span>  
            <span style={{width:'20%'}}>Date</span>  
            <span style={{width:'15%'}}>Details</span>    
            <span style={{width:'20%'}}>Archive</span>  
        </div>
        
        
        {flights.map(flight => 
            <div key={flight.id} className="table-row">
                <span style={{width:'15%'}}>{flight.number}</span>
                <span style={{width:'15%'}}>{flight.to}</span>
                <span style={{width:'15%'}}>{flight.from}</span>
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
                        // onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    > 
                        Dismiss
                    </button>
                </span>
            </div>
        )}
        
    </div>     
)


export default FlightsTable