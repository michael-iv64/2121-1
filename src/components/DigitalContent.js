import React from 'react';
import styles from './DigitalContent.module.css';

import {connect} from 'react-redux';
import { setSelectedAction, setPointsAction} from '../actions/actionsCreator';


// --persons ----
import bart from '../img/2035/student/bart_simpson.png';
import homer from '../img/2035/student/homer_simpson1.png';
import man from '../img/2035/student/13-man.png';
import robot from '../img/2035/student/robot.png';
import homerFace from '../img/2035/new/face/gface.png';
import robotFace from '../img/2035/new/face/rface.png';

import Circle from './circle/Circle';


class  MainPage  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          modal: false,
          points:0,
        };

        this.openTestHandler = this.openTestHandler.bind(this);
        this.setPointsHandler = this.setPointsHandler.bind(this);
    }

    componentDidMount(){
    // this.updateCanvas();
    }

    componentDidUpdate() {
    //   this.updateCanvas();
    }

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
 
    render(){
      console.log('this.props.person',this.props.person);
      console.log('this.props.knowledge[0].questions[0].answers',this.props.knowledge[0].questions[0].answers);
      let arr= this.props.knowledge[0].questions[0].answers;
      const renderCircle = () => {
        
      }
        return(
        <>

            {/* <button className={styles.openTest} onClick={this.setPointsHandler}><h2>Set points</h2></button> */}
        <div className = {styles.body}>
            <Circle />
            {/* <button className={styles.openTest} onClick={this.openTestHandler}><h2>Open Test Digital</h2></button> */}
            {/*  --- person menu    */}
            <div className={styles.topMenu}><h3> <img className={styles.icon1} alt="user" src={homerFace} title='User'/>&emsp;  
            {this.props.knowledge[0].type} : {this.props.knowledge[0].points}
             &emsp;
            {this.props.knowledge[1].type} : {this.props.knowledge[1].points}
            </h3></div>
            {/*  --- questions */}
            <div className={`${styles.topMenu} ${styles.bottom}` }><h3> Вопрос № &emsp; {this.props.knowledge[0].questions[0].question}  <img className={styles.icon1} alt="solar" src={robotFace} title='SolarSystem'/>&emsp;  
          
            </h3></div>
            {this.state.modal && <div className={styles.modal}>test</div>}
        </div>
        </>
        )
    }
}

function mapState(state) {
    return {
      person: state.getPerson,
      knowledge: state.getKnowledge,

    }
  }
  
  const mapDispatchToProps = {
    setPointsAction
  }

export default connect(mapState, mapDispatchToProps )(MainPage);
