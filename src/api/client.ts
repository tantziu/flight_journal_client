import axios from 'axios';

var url = 'https://opensky-network.org/api'

// const username:string = 'Tantziu'
// const token = `${username}:${apiKey}`;

// type FlightData = {

// }
const arrival = '/arrival?airport=LKPR&begin=1617984025&end=1617991225'
const aircraf = '/aircraft?icao24=4b180a'

export const fetchAllFlights = async () => {
    try {
        const response = await axios.get(url+'/flights'+`${arrival}`, {
            auth: {
                username: 'Iana',
                password: 'osCochstedt_13'
              },
        })
        console.log(response.data)
        return response

    } catch (error) {
          console.error(error);
    }
}

// export const fetchAllFlights = async () => {
//     const username = 'Tantziu'
//     const apiURL = 'http://flightxml.flightaware.com/json/FlightXML2'
//     const apiKey:string = '2a465bacaaca77eb25f1f37b262386c8d19074be';

//     const call = 'http://flightxml.flightaware.com/json/FlightXML2/MetarEx?airport=KJFK&startTime=0&howMany=1&offset=0'
//     try {
//         const response = await axios.get(call, {
//                 method: 'GET',
//                 headers: new Headers({
//                     'Authorization': 'Basic ' +btoa(`${username}:${apiKey}`),
//                     // 'Content-Type': 'application/x-www-form-urlencoded'
//                 }),
//             })
//             console.log(response.data)
//             return response
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const fetchAllFlights = async () => {
//     const url = 'http://api.aviationstack.com/v1/airports'
//     const query  = 'http://api.aviationstack.com/v1/flights&flight_date=2021-09-04'
//     const params = {
//         access_key: '951a0d11585cefa41f9b355404cbcef1',
//         search:'prg'
//       }
//     try {
//         const response = await axios.get(url, {params})
//         console.log(response.data)
//             return response
//     } catch (error) {
//         console.error(error);
//     } 
// }

// export const fetchAllFlights = async () => {
//     const url = 'https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/dates/2021-04-11/2021-04-12'
//     const options = {
//         headers: {
//           'x-rapidapi-key': 'ff0c25c979msh133c5b1503c2cddp1fe680jsn2f8cbfec35d2',
//           'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
//         }
//       };
//       try {
//         const response = await axios.get(url, options)
//         console.log(response.data);
//         } catch(error) {
//           console.error(error);
//       };
// }

// const Amadeus = require("amadeus");

// export const fetchAllFlights = async () => {
//     var amadeus = new Amadeus({
//         clientId: 'EvLkL6hFLhzYGjtUblQZRNUI2OP7V4hO',
//         clientSecret: 'AG5SYJbqPsGBj8B1'
//       });
      
//       amadeus.schedule.flights.get({
//           originLocationCode: 'ZRH',
//           destinationLocationCode: 'PRG',
//           departureDate: '2021-09-04'
//       }).then(function(response:any){
//         console.log(response.data);
//       }).catch(function(responseError:any){
//         console.log(responseError.code);
//       });

// }

