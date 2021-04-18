import initialState from './initialState';
import {GAME_STEPS}  from'../../constants/constants';

import {shuffle} from './shuftle';
const gameSteps = (state= initialState, {finishX, finishY, startX, startY, step,   type}) => {
   if(type === GAME_STEPS ) {

       // let step = this.props.startRandom.step;
       let pozX = state.startX;
       let pozY = state.startY;
       let arrowArr = state.arrowArr;
       let step = state.step;
               function randSteps() {
             
   
                   let array = ['left', 'right', 'up', 'down']; // 4 направления
                   for(let i = 0; i < 9; ++i ){
        
                     for(let j = 0; j < array.length; ++j ){
                 
                 // --------- перемешанный массив   -------------------------------
                         shuffle(array);
                 // --------- перемешанный массив   -------------------------------
       
                         let el = array[j]
                           // switch (array) {
                             if (el ==='left' && pozX >= 100 && step < 10 ) {
       
                                 pozX = pozX - 100;
                                 arrowArr= [...arrowArr, 'left'];
       
                                 step = step + 1;
                                 
       
                                 console.log('---------------left---------------')
                                 console.log({ pozX, pozY, step, arrowArr})
                                 console.log('------------------------------')
       
                                 continue;
       
                             }
       
                             else if (el ==='right' && pozX <= 100 && step < 10){
                               pozX = pozX + 100;
                               arrowArr= [...arrowArr, 'right'];
       
                               step = step + 1;
       
                               console.log('---------------right---------------')
                               console.log({ pozX, pozY, step, arrowArr})
                               console.log('------------------------------')
                   
                               continue;
       
                       
                             }
         
       
                             else if (el ==='up' && pozY >= 100 && step < 10){
                                 pozY = pozY - 100;
                                 arrowArr = [...arrowArr, 'up'];
       
                                 step = step + 1;
       
                                 console.log('----------------up--------------')
                                 console.log({ pozX, pozY, step, arrowArr})
                                 console.log('------------------------------')
                        
                                 continue;
       
                             }
                             else if (el ==='down' && pozY <= 100 && step < 10){
                               pozY = pozY + 100;
                               arrowArr = [...arrowArr, 'down'];
                               step = step + 1;
       
                               console.log('----------------down--------------')
                               console.log({ pozX, pozY, step, arrowArr})
                               console.log('------------------------------')
                        
                               continue;
                             } else   if(step >= 10){
                               return { pozX, pozY, step, arrowArr};
                            }
                            
                            console.log('default самый нижний',{ pozX, pozY, step, arrowArr})
                          }
                          
                        }
            
                        }
                        randSteps();
                        return {
                          ...state,
                          finishX: pozX,
                          finishY: pozY,
                          step: step,
                          arrowArr: arrowArr,
                        }
                 
                        }
                        else 
                        return state
                        
                        // }
                      }
export default gameSteps;