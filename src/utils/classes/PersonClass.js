import {SystemClass} from './SystemClass'

// let mx, my;

// export class PersonClass extends SystemClass{
export class PersonClass {
    constructor(canvasVariable, mouse, mx, my, Homer, Bart, Robo, context, name, size, personImg, x, y, selected, active, move){
      // super();
      this.name = name;
      this.size = size;
      this.personImg = personImg;
      this.x = x;
      this.y = y;

      this.selected = selected;
      this.active = active;
      this.move = move;
      this.context = context;
      this.Homer = Homer;
      this.Bart = Bart;
      this.Robo = Robo;
      this.mx = mx;
      this.my = my;
      this.mouse = mouse;
      this.canvasVariable = canvasVariable;
    

    }
    refresh() {

      let x = this.x;
      let y = this.y;
      let size = this.size;
      let selected = this.selected;
      let contex = this.context;
      let Homer = this.Homer;
      let Bart = this.Bart;
      let Robo = this.Robo;
      let mx = this.mx;
      let my = this.my;
      let mouse = this.mouse;


              //  -- фукнкция для выбора изображения персонажа ----

              let imgForOut;
              let drawImg = () =>{
                if(this.personImg === 1) {
                  return imgForOut = Homer;
                }
                else if(this.personImg === 2) {
                  return imgForOut = Bart;
                }
            
                else if(this.personImg === 3) {
                  return imgForOut = Robo;
                }
            
              }
              drawImg();
      
              // console.log('drowImg();',drowImg())

              // -----  SELECTED STATION ----------

              let distToM = Math.hypot(x+this.size/2-mx, y+this.size/2 - my);
              if(mouse.isDown){
                // console.log('x',x)
                // console.log('y',y)
                // console.log('size',size)
                console.log('mx',mx)
                console.log('my',my)


              }

      if(distToM <= 50 && mouse.isDown ){
        // console.log('distToM',distToM)
        // setSelectedId(1);


      }

      
                //  ---  выделяем  станцию  в круг   start ------
                  let selected1 = true
                  // console.log('selected', selected)
                
                  let x2 = this.x + this.size/2;
                  let y2 = this.y + this.size/2;
                  if(selected1 && mouse.isDown){
                  let time = new Date();
                  let rotate = 
                  // ((2*Math.PI)/60)*time.getSeconds()*5 
                  // +
                  //  (((2*Math.PI)/60000)*time.getMilliseconds()*5 + ((2*Math.PI)/60000)*time.getMilliseconds()*5)/2
                   (1.0 + ((2*Math.PI)/60000)*time.getMilliseconds())/2
                  ;
                  // console.log('rotate', rotate)

                  
                  
                  contex.beginPath();
                  // context.setLineDash([15, 15]);
                  // context.moveTo(0, 50);
                  // context.lineTo(300, 50);
                  // context.stroke();
                  
                  contex.arc(x2, y2, rotate*this.size, 0, 2 * Math.PI, false);
                  // context.ellipse(x2, y2, this.size/1.9, this.size/1.9, Math.PI/2, 0, 2 * Math.PI);
                  contex.fillStyle = '#4ec4cc17';
                  contex.fillStyle = '#29e47121';
                  contex.fill();
                  contex.lineWidth = 1.5;
                  contex.strokeStyle = '#16e7e794';
                  contex.strokeStyle = '#2ad16a75';
                  contex.stroke();
                  contex.setLineDash([]);
                  }
                  //  ---  выделяем  станцию  в круг   finish ------
                  
                    contex.beginPath();
                    contex.drawImage(imgForOut, x, y, size , size*2 )
    }
  }