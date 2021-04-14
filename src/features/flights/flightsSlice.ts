import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {fetchAllFlights} from '../../api/client';
// import { fetchCount } from './counterAPI';

// export const fetchPosts = createAsyncThunk('flight/fetchFlight', async () => {
//   const response = await client.get('fakeApi/posts')
//   return response.flight
// })
const dummyData:IFlight[] = [
  {id: 1,name: "LX1498", destination: "ZRH", origin: "PRG", aircraft: "", date:"09.04.2020", duration:80},
  {id: 2,name: "LX2098", destination: "PRG", origin: "ZRH", aircraft: "", date:"13.04.2020", duration:95}
]

export interface IFlight {
  id: number,
  name?: string,
  destination?: string,
  origin?: string,
  aircraft?: string,
  date?:string,
  duration?:number
}

export interface FlightsState {
    flights: IFlight[];
    loading: Boolean;
    hasErrors: Boolean;
};

const initialState: FlightsState = {
    flights: dummyData,
    loading: false,
    hasErrors: false
};

// export const addNewFlight = (newFlight:IFlight) => console.log("Slice flight:", newFlight);

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getFlights: state => {
      state.loading = true
    },
    getFlightsSuccess: (state, {payload}) => {
      state.flights = payload
      state.loading = false
      state.hasErrors = false
    },
    getFlightsFailure: state => {
      state.loading = false
      state.hasErrors = false
    },
    flightAdded: (state, action) => {
      state.flights.push(action.payload)
    }
    
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: {
    
  },
});
  
export const {getFlights, getFlightsSuccess, getFlightsFailure, flightAdded} = flightsSlice.actions
export const flightsSelector = (state:RootState) => state.flights

export default flightsSlice.reducer;

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await fetchAllFlights()
  // return response.flights  
})
  