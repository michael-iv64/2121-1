import {initialState} from './initialState';

import {SET_POINTS, SET_NEW_ , SET_SELECTED} from'../constants/constants';

const STATIONS = [
    
]

export default function getKnowledge (state = initialState.knowledge, action) {
    switch (action.type) {
      case SET_NEW_:
        return [...state].map(x => {
          if(x.id === action.payload.id){
            x.item = action.payload.item
          }
          return x
        })
      case SET_POINTS:
        return [...state].map(x => {
          if(x.id === action.payload.id){
            x.points = x.points + action.payload.points
          }
          return x
        })
      case SET_SELECTED:
        return [...state].map(x => {
          if(x.id === action.payload.id){
            x.selected = !x.selected
          }
          return x
        })
          
      default:
        return state
    }
  }


