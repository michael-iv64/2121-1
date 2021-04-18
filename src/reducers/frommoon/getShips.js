import initialState from './initialState';

import {GET_SHIPS, SET_FINISH_POZITION} from'../../constants/constants';


const getShips = (state= initialState.ships, {name ,size,img ,pozX,pozY,   type}) => {
    switch(type) {
        case GET_SHIPS :

            return {
                ...state,
                ships: [...state.ships],
            };

        default :
        return state;
    }
}
export default getShips;

