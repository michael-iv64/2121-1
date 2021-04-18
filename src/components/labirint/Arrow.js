import React from 'react';

import styles from './Arrow.module.css';

import left from '../../img/2035/labirint/left.png';
import right from '../../img/2035/labirint/right.png';
import up from '../../img/2035/labirint/up.png';
import down from '../../img/2035/labirint/down.png';
class Arrow extends React.Component {
    // function Conditional(props) {
    //     if(props.isLoading === true) {
    //         return (
    //             <h1>Loading...</h1>
    //         )
    //     }
    render(){
     
        // const isLoggedIn = this.state.isLoggedIn;
        // let button;
        return(<>

        <div className = {styles.downBlock}>
            {/* console.log(this.props.arrow) */}
           {this.props.arrows.length == 0 ?<h2>Нажмите на STEPS для начала игры  и следуйте инструкциям!</h2>
           :<h2>Следуйте стрелкам  и нажмите на точку финиша</h2>}
            <ul>
                {this.props.arrows.map((x,i) =>
                    <li key={i} className={styles.arrow}>
                    {`${x}` ==='left' ? <img style={{'width': '100%'}}src={left} alt={`${x}`}/> : null}
                    {`${x}` ==='right' ? <img style={{'width': '100%'}}src={right} alt={`${x}`}/> : null}
                    {`${x}` ==='up' ? <img style={{'width': '100%'}}src={up} alt={`${x}`}/> : null}
                    {`${x}` ==='down' ? <img style={{'width': '100%'}}src={down} alt={`${x}`}/> : null}
                    </li>
                )}
            </ul>
            <div><h2>Нажмите RESET для смены стартовой позиции</h2></div>
        </div>
        </>
        )
    }

    }
export default Arrow;