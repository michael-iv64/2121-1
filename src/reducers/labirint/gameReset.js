import {GAME_RESET} from'../../constants/constants';
import initialState from './initialState';


const gameReset = (state= initialState, {finishX, finishY, startX, startY, step,   type}) => {
    switch(type) {
        case GAME_RESET :
            const arr = [0, 100, 200]
            const randX = Math.floor(Math.random() * arr.length);
            const randY = Math.floor(Math.random() * arr.length);

        

            return {        
                ...state,
                startX: arr[randX],
                startY: arr[randY],
                arrowArr: ['no no'],
                step: 0
            };

        default :
        return state;
    }
}
export default gameReset;

