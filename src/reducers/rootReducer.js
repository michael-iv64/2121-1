import {combineReducers} from 'redux';
import getPerson from './personReducer';
import getShips from './frommoon/getShips';
import getStations from './frommoon/getStations';
import getKnowledge from './knowledgeReducer';

import gameReset from './labirint/gameReset';
import gameSteps from './labirint/gameSteps';
import startRandom from './labirint/startRandom';

export const rootReducer = combineReducers({
    getPerson, getShips , getStations , getKnowledge, gameReset, gameSteps, startRandom

})