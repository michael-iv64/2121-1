import React, { Component } from 'react';
import styles from './Labirint.module.css';

// import setYearAction from "../actions/actionYear"
import { actionStartRandom, actionGameSteps, actionGameReset} from '../../actions/actionsCreator';

import { connect } from "react-redux"

import Arrow from './Arrow';

// import food from '../img/2Food.png';


class Labirint extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
    }

    componentDidMount(){
      // setInterval(() => {
      //     this.updateCanvas();
      //     this.props.increment();
      //   }, 5000);

          this.updateCanvas();


    }
    componentDidUpdate() {
      this.updateCanvas();
    }
    updateCanvas() {
          this.canvas = this.canvasRef.current;
          this.canvas.width = window.innerWidth ;
          this.canvas.height = 350 ;

  
          this.ctx = this.canvas.getContext('2d');
          
          let mouse = {
            x : 0,
            y : 0,
            down : false,
          }
            window.onmousedown = function () {
                mouse.down = true;
                // selected = !selected;
              };  
            window.onmouseup = function () {
                mouse.down = false;
              };  
          

        const offsetX = this.canvas.width/2 -150;
        const offsetY = this.canvas.height/2 ;
        
        const offsetCircle = 50;

        this.ctx.fillStyle = "#5795e7";
        this.ctx.strokeStyle = '#2d07b8';
        this.ctx.lineWidth = '5';

        this.ctx.fillRect(200+ offsetX, 0, 100, 100);
        this.ctx.strokeRect(200+ offsetX, 0, 100, 100);
        this.ctx.fillRect(100+ offsetX, 0, 100, 100);
        this.ctx.strokeRect(100+ offsetX, 0, 100, 100);
        this.ctx.fillRect(0+ offsetX, 0, 100, 100);
        this.ctx.strokeRect(0+ offsetX, 0, 100, 100);

        this.ctx.fillRect(200+ offsetX, 100, 100, 100);
        this.ctx.strokeRect(200+ offsetX, 100, 100, 100);
        this.ctx.fillRect(100+ offsetX, 100, 100, 100);
        this.ctx.strokeRect(100+ offsetX, 100, 100, 100);
        this.ctx.fillRect(0+ offsetX, 100, 100, 100);
        this.ctx.strokeRect(0+ offsetX, 100, 100, 100);

        this.ctx.fillRect(200+ offsetX, 200, 100, 100);
        this.ctx.strokeRect(200+ offsetX, 200, 100, 100);
        this.ctx.fillRect(100+ offsetX, 200, 100, 100);
        this.ctx.strokeRect(100+ offsetX, 200, 100, 100);
        this.ctx.fillRect(0+ offsetX, 200, 100, 100);
        this.ctx.strokeRect(0.0+ offsetX, 200, 100, 100);
        this.ctx.closePath();
        
        this.ctx.beginPath();
        this.ctx.fillStyle = "#b41dc2";
        this.ctx.arc(this.props.startRandom.startX + offsetX + offsetCircle, this.props.startRandom.startY + offsetCircle, 25, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        //  --------- финишный круг   ----------------------
        this.ctx.beginPath();
        this.ctx.fillStyle = "#24ce2d";
        // ---------  перенменныя для финишного круга  x, y
        let finishCircleX = this.props.game.finishX + offsetX + offsetCircle;
        let finishCircleY = this.props.game.finishY + offsetCircle;
        // -------------------------------------------------------------
        // this.ctx.arc(finishCircleX, finishCircleY, 25, 0, 2 * Math.PI);
        // this.ctx.fill();
        // this.ctx.closePath();
        //  --------- финишный круг   ----------------------
 
        let context = this.ctx;
        let isCursorInRect = function() {
          return mouse.x > finishCircleX -50 && mouse.x < finishCircleX+50 && mouse.y > finishCircleY+100 && mouse.y < finishCircleY + 200;
        };
        let isCursorInField = function() {
          return mouse.x > offsetX && mouse.x < offsetX + 300 && mouse.y > offsetY && mouse.y < offsetY + 300;
        };

        function loop() {
          requestAnimationFrame(loop);
          // ---- верное решение  ------------------
          if(isCursorInRect() && mouse.down) {
            context.fillStyle = '#0be04b';
            
            context.arc(finishCircleX, finishCircleY, 25, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
            context.font = "48px serif";
            context.fillText("Верно!", 150, 50);
            context.font = "24px serif";
            context.fillStyle = '#06770c';

            context.fillText("финиш!", finishCircleX, finishCircleY-25);
        }
          //  --- неправильное решение  -------------       
          if(!isCursorInRect() && mouse.down && isCursorInField())  {
          context.beginPath();
          context.fillStyle = 'red';
          context.beginPath();
          context.arc(mouse.x, mouse.y-175, 10, 0, 2 * Math.PI);
          context.fill();
          context.closePath();
          context.font = "48px serif";
          context.fillText("Неправильно!", 150, 150);
          context.font = "24px serif";
          context.fillText("финиш!", finishCircleX, finishCircleY-25);
          context.arc(finishCircleX, finishCircleY, 15, 0, 2 * Math.PI);
          context.fill();
          // context.stroke();
          context.closePath();
        }
      }
      loop();

      window.onmousemove = function (e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        console.log(mouse.x, mouse.y)
        console.log('offsetX',offsetX, 'offsetY',offsetY)
          };
      }
    handleRefresh = () => {
      // by calling this method react re-renders the component
      window.location.reload();
    };

render() {
  // ----------------------------------
  // console.log('this.props.startRandom', this.props.startRandom)
  // ----------------------------------
  // console.log('this.props.game.arrowArr', this.props.game.arrowArr)
  // console.log('this.props.reset', this.props.reset)
  // console.log('this.props.game', this.props.game)
        return (
        <div>
            <div>Labirint</div>
            {/* <StepsNew startRandom={this.props.startRandom}/> */}
            <br />
            {/* <h3>step : {this.props.step.finishX}</h3> */}
            <button className={styles.reset} onClick={this.handleRefresh}>GAME RESET</button>
            {/* <button onClick={this.props.setRandomFunction}>RANDOM POSITION</button> */}
            <button className={styles.steps} onClick={this.props.setGameSteps}>GAME STEPS</button>
            {/* <h3>startX : {this.props.game.startX } startY : {this.props.game.startY }</h3> */}
            {/* <h3>finishX : {this.props.game.finishX} finishY : {this.props.game.finishY}</h3> */}
            {/* <button onClick={this.props.setGameReset}>GAME RESET</button> */}
            <canvas ref={this.canvasRef}
            />
            {/* <Arrow arrows={this.props.game.arrowArr}/> */}
        </div>
        );
    }
}

function mapState(state) {
  return {
    game: state.gameSteps,
    startRandom: state.startRandom,
    reset: state.gameReset,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRandomFunction: () => {
      dispatch(actionStartRandom())
    },
    setGameSteps: () => {
      dispatch(actionGameSteps())
    },
    setGameReset: () => {
      dispatch(actionGameReset())
    },
  }
}

export default connect(mapState, mapDispatchToProps )(Labirint);
