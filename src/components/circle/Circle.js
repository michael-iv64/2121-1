import React from 'react';
import {connect} from 'react-redux';

import {setPointsAction} from '../../actions/actionsCreator';
import styles from './Circle.module.css';
class Circle extends  React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
     makeArr(){
        this.props.knowledge[0].questions.map(item=> {
            let arr = item.answer 
            console.log('arr', arr)
            return arr
        });
    }
  
    render(){
        this.makeArr()
      let arr= this.props.knowledge[0].questions[0].answers;
        return arr.map(items => <div className={styles.circle}
              key={items.id}  onClick={() => this.props.setPointsAction( {id:1, points: items.points})}
              ><br /> <br />{items.data} <br/>{items.points}</div>)

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

export default connect(mapState, mapDispatchToProps )(Circle);

