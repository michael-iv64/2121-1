import React from 'react';
// import PlanetsList from '../PlanetsList2';
import styles from './MainPage.module.css';

import {connect} from 'react-redux';
import { setSelectedAction} from '../actions/actionsCreator';

// ---- вспомогаьельные ф-ии и классы  ----
// import {MouseControls} from '../utils/mouse/mouseControls';
// import {PersonClass} from '../utils/classes/PersonClass';

// --persons ----
import bart from '../img/2035/student/bart_simpson.png';
import homer from '../img/2035/student/homer_simpson1.png';
import man from '../img/2035/student/13-man.png';
import robot from '../img/2035/student/robot.png';

// ----- sprites -----------------
import {tick, tickVertical, tickHorizontal, tickSimple, tick2} from '../utils/functions/spriteTick';
import girl from '../img/2035/girl.png';
import girl2 from '../img/2035/girl2.png';
import goingMan from '../img/2035/going-man.png';
import simple from '../img/2035/simple.png';
import bgi from '../img/2035/environment/окружение 11.png'


import san from '../img/2035/new/sun.png';



// --------------  functions  --------------------------
// import {alertMe} from './functions/functions';

class  MainPage  extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
        // this.onBtnClick = this.onBtnClick.bind(this);
        // this.setSelectedHandler = this.setSelectedHandler.bind(this)
    }

    componentDidMount(){
    this.updateCanvas();
    }

    componentDidUpdate() {
      this.updateCanvas();
    }

    updateCanvas() {

      let canvasVariable = this.canvas = this.canvasRef.current;
      this.canvas.width = window.innerWidth ;
      this.canvas.height = window.innerHeight;

      let context = this.ctx = this.canvas.getContext('2d');

      //  ---   persons  ----
      let badBoy  = new Image();
      badBoy.src = man;

      let Homer  = new Image();
      Homer.src = homer;

      let Bart  = new Image();
      Bart.src = bart;

      let Robo  = new Image();
      Robo.src = robot;

      let Girl = new Image();
      Girl.src = girl;

      let Girl2 = new Image();
      Girl2.src = girl2;

      let GoingMan = new Image();
      GoingMan.src = goingMan;

      let star = new Image();
      star.src = san;

      let Simple = new Image();
      Simple.src = simple;

      let cw, ch, cx, cy, ph, pw;

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  для параллакса    
    let mx = 0, my = 0;
    this.canvas.addEventListener(`mousedown`, e => {
     mx = e.clientX - canvasVariable.getBoundingClientRect().left;
     my = e.clientY - canvasVariable.getBoundingClientRect().top;
    })
    
    function resize() {
      // let cw, ch, cx, cy, ph, pw;
      cw = canvasVariable.width = window.innerWidth;
      ch = canvasVariable.height = window.innerHeight;
      cx = cw * .5;// center x
      cy = ch * .5; // center y
      ph = cy * .4;// 40%  at center y 40% от высоты цетра экрана -смещение по высоте
      pw = cx * .4;// 40% at center x  40% от ширины цетра экрана - смещение по ширине
    }
    resize();
    window.addEventListener(`resize`, resize);// в случае изменения размера окна
    
    //  ------------- mouse  ------------------------------
    // let mouse = new MouseControls();
    // mx = mouse.clientX
    // my = mouse.pos.y
    // mouse.update();

    var mouse = {
      x : 0,
      y : 0,
      down : false,
  }
  window.onmousedown = function () {
      mouse.down = true;
      console.log('down', mouse.clientX)

      // selected = !selected;
  };
  window.onmouseup = function () {
      mouse.down = false;
  };
    console.log('mx',mx)
    //  ----------------------------------------
    //  ----- functions  -------------------
//  ----------------------------------------
    function alertMe(k, name) {
      console.log('Name' + name+  'Size'+k)
    }

    let startCoords = [];
    function getStartCoords(x, y) {
      let xx = x;
      let yy = y;
      return startCoords = [{x: xx, y: yy}];
    }
    function flightToPlanet(){
      startCoords = [];
    }
    function setSelectedId(){
      let id = 1;
      return id;
    }
    // ---конфиги для создания  объектов игры ---

    let personsCfg = this.props.person;

    // -- class Person  ----- 


// let mx, my;

// export class PersonClass extends SystemClass{
class PersonClass {
    constructor( Homer, Bart, Robo, context, name, size, personImg, x, y, selected, active, move){
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
              if(mouse.down){
  
              }

      if(distToM <= 50 && mouse.down ){
        // console.log('distToM',distToM)
        // setSelectedId(1);


      }

      
                //  ---  выделяем  станцию  в круг   start ------
                  let selected1 = true
                  // console.log('selected', selected)
                
                  let x2 = this.x + this.size/2;
                  let y2 = this.y + this.size/2;
                  if(distToM <= 50 && selected1 && mouse.down){
                  let time = new Date();
                  let rotate = 
                  // ((2*Math.PI)/60)*time.getSeconds()*5 
                  // +
                  //  (((2*Math.PI)/60000)*time.getMilliseconds()*5 + ((2*Math.PI)/60000)*time.getMilliseconds()*5)/2
                   (1.0 + ((2*Math.PI)/60000)*time.getMilliseconds())/2
                  ;
                  // console.log('rotate', rotate)

                  
                  
                  contex.beginPath();
                  
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

    
    function starShine() {
      context.drawImage(star, cw / 2 + 100 , ch / 2 - 400, 200, 200);
    }

    function ranGirl() {
      let x = tick()
      context.drawImage(Girl,x, 0, 384, 1436, cw / 2 - 1400 / 2, ch / 2 - 700 / 2, 150, 400);
    }
    function ranGirl2() {
      let x = tick2()
      let posX = 110;
      context.drawImage(Girl2,x, 0, 1000, 1000, posX, ch / 2 + 170, 250, 250);
      posX +=10;
    }

    function ranMan() {
      let x = tickHorizontal();
      let y = 0;
      context.drawImage(GoingMan ,x, y, 215, 185, cw / 2 - 1000 / 2, ch / 2 - 800 / 2, 150, 200);
    }

    function ranSimple() {
      let x = 0;
      let y = tickSimple();
      context.drawImage(Simple ,x, y, 100, 100, cw / 2 - 200 / 2, ch / 2 - 800 / 2, 150, 200);
    }

    let orbsList = [];

    function createPersons() {
      personsCfg.map(item => {
        // orbsList.push( new Person(item.name, item.size, item.img, item.x, item.y))
        orbsList.push( new PersonClass( Homer, Bart, Robo, context, item.name, item.size, item.img, item.x, item.y))
     })
    }
    createPersons();

    function loop() {
      requestAnimationFrame(loop);

      context.clearRect(0, 0, cw, ch);
      // ctx.drawImage(ship1, cfg.ship1.posX, cfg.ship1.posY, cfg.ship1.size , cfg.ship1.size )
      
      starShine();
      // ranGirl();

      // ranMan();
      // ranSimple();
      ranGirl2();


      orbsList.map(e => e.refresh());
 
      }
      loop();

    };

    setNameHandler() {
      return this.props.setNameAction( {name:'Новое имя ', id:1})
  }
    setSelectedHandler() {
      return this.props.setSelectedAction( {id:1})
  }
    render(){
      console.log('this.props.person',this.props.person);
        return(
            <div className={styles.canv}>
                
            <h3> Sun shining ....game start  soon....</h3>
            {/* <h3>name: {this.props.person[1].name}</h3> */}
              
              {/* <button onClick = {this.setSelectedHandler}>set selected</button>
              <button onClick = {this.setNameHandler}>new name</button> */}

            <canvas ref={this.canvasRef} />

            </div>
        )
    }
}

function mapState(state) {
    return {
      // user: state.userInfo.user,
      person: state.getPerson,

    }
  }
  
  const mapDispatchToProps = {
    // setNameAction, setSelectedAction
    // return {
      // setYearFunction: year => {
      //   dispatch(setYearAction(year))
      // },
      // setSelectedId: (id) => {
      //   dispatch(actionSetSelected(1))
      // },

    // }
  }

export default connect(mapState, mapDispatchToProps )(MainPage);
// export default connect(mapState, mapDispatchToProps,{forwardRef: true},null )(MainPage); проверить
