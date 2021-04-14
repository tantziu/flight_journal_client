"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.fetchAllFlights = void 0;
// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-
var axios_1 = require("axios");
var url = 'https://opensky-network.org/api';
var arrival = '/arrival?airport=LKPR&begin=1617984025&end=1617991225';
var aircraf = '/aircraft?icao24=4b180a';
exports.fetchAllFlights = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get(url + '/flights' + ("" + arrival), {
                        auth: {
                            username: 'Iana',
                            password: 'osCochstedt_13'
                        }
                    })];
            case 1:
                response = _a.sent();
                console.log(response);
                return [2 /*return*/, response];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
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
