import React from 'react';
// import PlanetsList from '../PlanetsList2';
import styles from './EnterTest.module.css';

import {connect} from 'react-redux';
import { setSelectedAction, setPointsAction} from '../actions/actionsCreator';

// ---- вспомогаьельные ф-ии и классы  ----
// import {MouseControls} from '../utils/mouse/mouseControls';
// import {PersonClass} from '../utils/classes/PersonClass';

// --persons ----
import bart from '../img/2035/student/bart_simpson.png';
import homer from '../img/2035/student/homer_simpson1.png';
import man from '../img/2035/student/13-man.png';
import robot from '../img/2035/student/robot.png';
import homerFace from '../img/2035/simsons/Homer2.jpg';
import robotFace from '../img/2035/robots/robo/robo1.png'
import icon1 from '../img/2035/new/face/bface.png';


// ----- sprites -----------------
import {tick, tickVertical, tickHorizontal, tickSimple, tick2} from '../utils/functions/spriteTick';
import girl from '../img/2035/girl.png';
import girl2 from '../img/2035/girl2.png';
import goingMan from '../img/2035/going-man.png';
import simple from '../img/2035/simple.png';

// ---  planets and star -----
import san from '../img/2035/new/sun.png';



// --------------  functions  --------------------------
// import {alertMe} from './functions/functions';

class  MainPage  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          modal: false,
          points:0,
        };
        this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
        this.openTestHandler = this.openTestHandler.bind(this);
        this.setPointsHandler = this.setPointsHandler.bind(this);
        // this.alertMe2 = this.alertMe2.bind(this);
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
      mouse.down = false;

      // console.log('down', mouse.clientX)

      // selected = !selected;
  };
  window.onmouseup = function () {
      mouse.down = false;
  };
    // console.log('mx',mx)
    //  ----------------------------------------
    //  ----- functions  -------------------
//  ----------------------------------------
    function alertMe() {
      this.props.setPointsAction({id:1, points:1});

      // this.setState({points: this.state.points + points})
      // console.log('data '+data +' points ' + points   )
      // console.log(' this.state.points' + this.state.points   )
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
    // ---- stardust -----------
    const cfg = {
      orbsCount   : 10,
      minVelocity : 0.002,
      ringsCount  : 10,
    }


    let personsCfg = this.props.person;
    // let actionCfg = setPointsAction;

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
      // this.mx = mx;
      // this.my = my;
      // this.mouse = mouse;
      // this.canvasVariable = canvasVariable;
    

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
      // let mx = this.mx;
      // let my = this.my;
      // let mouse = this.mouse;


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
                // console.log('x',x)
                // console.log('y',y)
                // console.log('size',size)
                // console.log('mx',mx)
                // console.log('my',my)


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
class Circle {
    constructor( name, size, personImg, x, y, selected, active, move){
      // super();
      this.name = name;
      this.size = size;
      this.personImg = personImg;
      this.x = x;
      this.y = y;

      this.selected = selected;
      this.active = active;
      this.move = move;
      // this.mx = mx;
      // this.my = my;
      // this.mouse = mouse;
      // this.canvasVariable = canvasVariable;
    

    }
    refresh() {

      let x = this.x;
      let y = this.y;
      let size = this.size;
      let selected = this.selected;
      let contex = this.context;
      // let Homer = this.Homer;
      // let Bart = this.Bart;
      // let Robo = this.Robo;
      // let mx = this.mx;
      // let my = this.my;
      // let mouse = this.mouse;


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
                // console.log('x',x)
                // console.log('y',y)
                // console.log('size',size)
                // console.log('mx',mx)
                // console.log('my',my)


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

  class Orb{
    constructor(word, points) {
        this.size     = Math.random() * 50 + 20;
        this.angle    = Math.random()* 360;
        this.radius   = (Math.random() * cfg.ringsCount | 0) * ph / cfg.ringsCount;// | 0 побитовое округление  аналог Math.floor()
        this.impact   = this.radius / ph;// влияние от 0 до 1 расстояние до зрителя ближе- д б больше
        // this.velocity = cfg.minVelocity + Math.random() * cfg.minVelocity;
        // this.velocity = cfg.minVelocity + Math.random() * cfg.minVelocity - this.impact;
        this.velocity = cfg.minVelocity + Math.random() * cfg.minVelocity + this.impact;
        this.word = word;
        this.points = points;
    }

    refresh() {
      let radian = this.angle * Math.PI / 180;  

      let cos    = Math.cos(radian);
      let sin    = Math.sin(radian);

      //  превращаем круг в овал -растягиваем x
      let offsetX = cos * pw * this.impact;
      // сплющивваем по краям
      let offsetY = sin * pw * this.impact;

      //   parallax
      let paralaxX = mx / cw * 2 - 1; // получаем от -1 до 1
      let paralaxY = my / ch;

      let x = cx + cos * (ph + this.radius) + offsetX;// offsetX растягивание по краям
      // let y = cy + sin * (ph + this.radius) - offsetY; // offsetY сплющивание
      let y = cy + sin * (ph + this.radius) - offsetY * paralaxY - paralaxX * offsetX; // paralax
      
      //  расстояние до центра 
      let distToC = Math.hypot(x-cx, y - cy);
      //  расстояние до курсора мыши
      let distToM = Math.hypot(x-mx, y - my);


      let optic = sin * this.size * this.impact * .7;// оптически приближаем нижние и отдаляем верхние частицы
      
      let mEffect = distToM <= 50 ? (1 - distToM / 50) * 25 : 0;// увеличение размеров частиц  около мыши

      // let size = this.size + optic;
      // let size = this.size + optic + mEffect;
      let size = this.size + optic ;


      let h     = this.angle; //  оттенок частицы 
      let s     = 100;//  насыщенность
      // let l     = 50 // яркость
      // let l     = this.impact * 100 // яркость
      // let l     = (1 - Math.sin(this.impact * Math.PI)) * 100 // яркость
      let l     = (1 - Math.sin(this.impact * Math.PI)) * 90 + 10 // яркость
      let color = `hsl(${h}, ${s}%, ${l}%)`;

      // поместим отрисовку сферы в условие 
      if (distToC > ph - 1 || sin > 0) { //минус 1 чтобы убрать мерцание(неточности вычмслений)
        // ctx.fillStyle = `red`;//         sin > 0  показать передние частицы
        // ctx.fillStyle = color;         
        context.strokeStyle = context.fillStyle = color;         
        context.beginPath();
        context.arc(x, y, size, 0, 2 * Math.PI);
        // ctx.fill();


        // ----взаимодействие с мышью start  -----
        // distToM <= 50 ? context.stroke() : context.fill();
        distToM <= 50  ? context.stroke() : context.fill();
        // context.fill();
        // context.stroke();
        // ----взаимодействие с мышью finish   -----
        
        // -------  data   ----------------------
        
        let word = this.word;
        let points = this.points
        // ------------------------------------------------
        context.closePath()
        
        // distToM <= 50  && console.log('points', points);
        // let w = 1;
        // distToM <= 50  && alertMe(w, points);
        // distToM <= 50  && this.props.actionCfg(w, points);
        
        // -------  data   ----------------------
        
        
        
        // this.props.setSelectedAction()
        // this.props.setPointsAction({id:1, points: 1})
        
        
        // ------------------- text -----------------------
        
        // ------------------- text -----------------------
        context.fillStyle = "green";
        context.strokeStyle = "white";
        // context.font = "italic 30pt Arial";
        // context.font = "italic 30pt Arial";

        context.font = 'bold 30px sans-serif';
        
        // context.fillText("Fill text", x, y);

        context.fillText(`${word}`, x, y);
        context.font = 'bold 30px sans-serif';
        context.strokeText(`${word}`, x, y);
        
      }

        this.angle = (this.angle + this.velocity/5) % 360;
        // this.angle = (this.angle - this.velocity) % 360;
    }
  }
    
    function starShine() {
      // context.drawImage(star, cw / 2 - 200 / 2, ch / 2 - 200 / 2, 200, 200);
      context.drawImage(star, cw / 2 + 900 / 2, ch / 2 - 450 , 200, 200);
      // context.drawImage(Homer, cw / 2 , ch / 2 - 100 , 100, 200);
    }

 


    let orbsList = [];
    // -------------stardust  start--------------
    //   function createStardust() {
      //     for (let i = 0; i < cfg.orbsCount; i++) {
        //         orbsList.push( new Orb() );
        //     }
        // }
        // createStardust();
        // -------------stardust  -finish-------------
        
        // function createPersons() {
        //   personsCfg.map(item => {
        //     // orbsList.push( new Person(item.name, item.size, item.img, item.x, item.y))
        //     orbsList.push( new PersonClass( Homer, Bart, Robo, context, item.name, item.size, item.img, item.x, item.y))
        //   })
        // }
        // createPersons();
        // -----------------------------------------------------
        // -----------------------------------------------------
        //  --- рабочая версия --------------
        // let words = ['dfdfdfd', 'gggggggggg', 'uuuuuuuu', 'rrrrrrr', 'hhhhhhhhhhh']
        
        // function createCircles() {
          //   words.map(item => {
            //     // orbsList.push( new Person(item.name, item.size, item.img, item.x, item.y))
            //     orbsList.push( new Orb( item))
            //   })
            // }
            // createCircles();
            //  --- рабочая версия --------------
            // -----------------------------------------------------
            // -----------------------------------------------------
            
      // let words = ['dfdfdfd', 'gggggggggg', 'uuuuuuuu', 'rrrrrrr', 'hhhhhhhhhhh']
      let answers = this.props.knowledge[0].questions[2].answers
      
      function createCircles() {
        answers.map(item => {
          // orbsList.push( new Person(item.name, item.size, item.img, item.x, item.y))
          orbsList.push( new Orb( item.data, item.points))
        })
      }
      createCircles();



    function loop() {
      requestAnimationFrame(loop);

      context.clearRect(0, 0, cw, ch);
      // ctx.drawImage(ship1, cfg.ship1.posX, cfg.ship1.posY, cfg.ship1.size , cfg.ship1.size )
      
      starShine();
      // ranGirl();

      // ranMan();
      // ranSimple();


      // persones();
      orbsList.map(e => e.refresh());
    //   context.beginPath();
    //   context.strokeStyle = 'red;'
    //   context.arc(300,200, 100, 0, 3.14, );
    //   context.stroke(); 
      }
      loop();

    };

  setNameHandler() {
      return this.props.setNameAction( {name:'Новое имя ', id:1})
  }
    setSelectedHandler() {
      return this.props.setSelectedAction( {id:1})
  }
  openTestHandler= () => {
    this.setState({modal: !this.state.modal})
  }

  setPointsHandler = () => {
    return this.props.setPointsAction( {id:1, points: 1})
  }

  //  alertMe2 = (data, points) => {
  //   this.setState({points: this.state.points + points})
  //   console.log('data '+data +' points' + points   )
  //   console.log(' this.state.points' + this.state.points   )
  // }
    render(){
     
        return(
        <>
        {/*  --- person menu    */}
        <div className={styles.topMenu}><h3> <img className={styles.icon1} alt="user" src={icon1} title='User'/>&emsp;  
          {this.props.knowledge[0].type} : {this.props.knowledge[0].points}
          {/* sequrity : {this.state.points} */}
          &emsp;
          {this.props.knowledge[1].type} : {this.props.knowledge[1].points}
          </h3></div>
          {/*  --- questions */}
        <div className={`${styles.topMenu} ${styles.bottom} ` }><h3> Вопрос &emsp; {this.props.knowledge[0].questions[2].question}  <img className={styles.icon1} alt="user" src={robotFace} title='robo'/>&emsp;  
          
          </h3></div>
            {this.state.modal && <div className={styles.modal}>test</div>}
            <div className={styles.canv}>
                
            {/* <h3> Sun shining ....game start  soon....</h3>
            <h3>name: {this.props.person[1].name}</h3> */}
              
              {/* <button onClick = {this.setSelectedHandler}>set selected</button>
              <button onClick = {this.setNameHandler}>new name</button> */}

            <canvas ref={this.canvasRef} />
              <button className={styles.openTest} onClick={this.setPointsHandler}><h2>Set points</h2></button>
              <button className={styles.openTest} onClick={this.openTestHandler}><h2>Open Test</h2></button>

            </div>
        </>
        )
    }
}

function mapState(state) {
    return {
      // user: state.userInfo.user,
      person: state.getPerson,
      knowledge: state.getKnowledge,

    }
  }
  
  const mapDispatchToProps = {
    setPointsAction
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

export default connect(mapState, mapDispatchToProps,null, {withRef: false} )(MainPage);
