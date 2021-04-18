import {RANDOM_POZITION} from'../../constants/constants';
import initialState from './initialState';

const startRandom = (state= initialState, {finishX, finishY, startX, startY, step,   type}) => {
    switch(type) {
        case RANDOM_POZITION :
            const arr = [0, 100, 200]
            const randX = Math.floor(Math.random() * arr.length);
            const randY = Math.floor(Math.random() * arr.length);

            return {
                ...state,
                startX: arr[randX],
                startY: arr[randY],
                arrowArr: [],
                step: 0
            };

        default :
        return state;
    }
}
export default startRandom;

