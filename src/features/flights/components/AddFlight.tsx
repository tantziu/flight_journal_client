const AddFlight = () => {
    return (
        <div className='addFlight'>
            <h2>Add new flight</h2>
            <form>
                <label htmlFor="flight">Flight Number:</label>
                <input
                    type="text"
                    id="flight"
                    name="flight"
                    // value={flight}
                    // onChange={onFlightChanged}
                />
                <label htmlFor="flight">Destination:</label>
                <input
                    type="text"
                    id="flight"
                    name="flight"
                    // value={flight}
                    // onChange={onFlightChanged}
                />
                <label htmlFor="flight">From:</label>
                <input
                    type="text"
                    id="flight"
                    name="flight"
                    // value={flight}
                    // onChange={onFlightChanged}
                />
                <label htmlFor="flight">Date:</label>
                <input
                    type="text"
                    id="flight"
                    name="flight"
                    // value={flight}
                    // onChange={onFlightChanged}
                />
            </form>

            <button type="button" /*onClick={onSearchFlightClicked}*/ disabled={false}>
                Add to Table
            </button>
        </div>     
    )
}

export default AddFlight;