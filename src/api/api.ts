// import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:4000/api/v1';

// export const getFlights = async <T>():Promise<T> => {
//     let response:Response
//     try {
//         response = await fetch(baseUrl + "/flights")
//         console.log("API FLIGHTS:", response)
//         const body =  await response.json();
//         console.log("API body:", body)
//         return body;
//     } catch(error) {
//         throw new Error(error)
//     }
// }

export const getFlights = async () => {
    let response:Response
    try {
        response = await fetch(baseUrl + "/flights")
        // console.log("API FLIGHTS:", response)
        const body =  await response.json();
        // console.log("API get flights body:", body)
        return body;
    } catch(error) {
        throw new Error(error)
    }
}

export const getFlight = async (id:string) => {
    let response:Response
    try {
        response = await fetch(baseUrl + `/flights/id/${id}`)
        // console.log("API FLIGHTS:", response)
        const body =  await response.json();
        // console.log("API get flights body:", body)
        return body;
    } catch(error) {
        throw new Error(error)
    }
}

export const addFlight = async (formData:IFlight) => {
    try {
        const flight:IFlight = {
            name:formData.name,
            destination: formData.destination,
            origin:formData.origin,
            date:formData.date
        }
        const response = await fetch(baseUrl+"/flights/add-flight", {
            method: "POST", 
            mode: "cors",
            cache: "no-cache",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(flight) 
        })
       
        const body = await response.json();
        // console.log("API add flight body:", body)
        return body;
    } catch(error) {
        throw new Error(error)
    }
}

export const updateFlight = async (flight:IFlight) => {
    try {
        const updatedFlight:IFlight = {
            name:flight.name,
            destination: flight.destination,
            origin:flight.origin,
            date:flight.date
        }

        const response = await fetch(baseUrl + `/flights/update-flight/${flight._id}`, {
            method: "PUT", 
            mode: "cors",
            cache: "no-cache",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(updatedFlight)
        })
        const body = await response.json();
        // console.log("API update flight body:", body)
        return body;
    } catch(error) {
        throw new Error(error)
    }
}

export const deleteFlight = async (id:string) => {
    try {
        const response = await fetch(baseUrl + `/flights/delete-flight/${id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        }) 
        const body = await response.json();
        console.log("api", body)
        return body;
    } catch(error) {}
}

export type ApiDataType = {
    message: String;
    status:String;
    flights: IFlight[];
    flight?: IFlight;
}

export interface IFlight {
    _id?: string,
    name?: string,
    destination?: string,
    origin?: string,
    aircraft?: string,
    date?:string,
    duration?:number
  }
// export const getFlights = () => new Promise(requestFlights())