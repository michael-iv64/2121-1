const getInitialState = () => {
    // let initialState = {};
    const arr = [0, 100, 200]
    const randX = Math.floor(Math.random() * arr.length);
    const randY = Math.floor(Math.random() * arr.length);
    
    return   {        
        finishX: 100,
        finishY: 100,
        startX: arr[randX],
        startY: arr[randY],
        arrowArr: [],
        step: 0
    };
  }
  
  // getInitialState();
  const initialState = getInitialState();
   
   
  //  const initialState = 
  //    { 
  //        finishX: 100,
  //        finishY: 100,
  //        startX: 0,
  //        startY: 0,
  //        step: 0,
  //        arrowArr: []
  //     }
  
      export default initialState;