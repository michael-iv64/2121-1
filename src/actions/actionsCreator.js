import { SET_SELECTED, SET_POINTS, SET_NEW_ITEM , GAME_STEPS, GAME_RESET, RANDOM_POZITION} from  '../constants/constants';



export  const setSelectedAction = id => ({ type: SET_SELECTED, payload: id})

export const setPointsAction = ({id,points }) => {
    return {
        type: SET_POINTS,
        payload: {id , points}
    }
}
export const setItemAction = (id) => {
    return {
        type: SET_NEW_ITEM,
        payload: id
    }
}

// ------------ for planet ---------------------
export const setNameAction = (id) => {
    return {
        type: SET_NEW_ITEM,
        payload: id
    }
}
// export const setSelectedAction = (id) => {
//     return {
//         type: SET_NEW_ITEM,
//         payload: id
//     }
// }
// --------------------------------- 
//    -- labirint  ----------
// actionStartRandom, actionGameSteps, actionGameReset

export const actionGameSteps = (finishX, finishY, startX, startY, step) => ({
    type: GAME_STEPS,
    finishX,
    finishY,
    startX,
    startY,
    step
});
  export const actionGameReset = (finishX, finishY, startX, startY, step) => ({
    type: GAME_RESET,
    finishX,
    finishY,
    startX,
    startY,
    step
});

export const actionStartRandom = (finishX, finishY, startX, startY, step) => ({
    type: RANDOM_POZITION,
    finishX,
    finishY,
    startX,
    startY,
    step
});
