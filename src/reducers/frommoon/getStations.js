import initialState from './initialState';

import {GET_STATIONS} from'../../constants/constants';


const getStations = (state= initialState.stations, {starSize ,starName ,starColor , type}) => {
    switch(type) {
        case GET_STATIONS :

            return {
                ...state,
                stations: [...state.stations],
            };

        default :
        return state;
    }
}
export default getStations;


// const getStations = (state= initialState, {starSize ,starName ,starColor , type}) => {
//     switch(type) {
//         case GET_STATIONS :

//             return {
//                 ...state,
//                 stations: [...state.stations],
//             };

//         default :
//         return state.stations;
//     }
// }
// export default getStations;
