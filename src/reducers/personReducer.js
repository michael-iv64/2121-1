import {initialState} from './initialState';

import {SET_NEW_ITEM, SET_SELECTED} from'../constants/constants';

const STATIONS = [
    
]

export default function getPerson (state = initialState.person, action) {
    switch (action.type) {
      case SET_NEW_ITEM:
        return [...state].map(person => {
          if(person.id === action.payload.id){
            person.item = action.payload
          }
          return person
        })
      case SET_SELECTED:
        return [...state].map(person => {
          if(person.id === action.payload.id){
            person.selected = !person.selected
          }
          return person
        })
          
      default:
        return state
    }
  }


