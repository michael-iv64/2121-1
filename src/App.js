import React, { Component } from 'react';
import styles from './App.module.css';

import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk';// - это мидлвеар


import MainPage from './containers/MainPage';
import {DefenceData} from './components/DefenceData';
import {Information} from './components/Information';
import {Commucations} from './components/Commucations';
import DigitalContent from './components/DigitalContent';
import NewTest from './components/NewTest';
import Labirint from './components/labirint/Labirint';

// -------------------------------------------
// -------------------------------------------
import EnterTest from './containers/EnterTest';


import icon1 from './img/2035/new/face/bface.png';
import icon2 from './img/2035/new/face/gface.png';
import icon3 from './img/2035/new/face/rface.png';
import cup from './img/2035/new/iconspPng/1x/cup.png';
import house from './img/2035/new/iconspPng/1x/house.png';
import level from './img/2035/new/iconspPng/1x/level.png';
import phone from './img/2035/new/iconspPng/1x/phone.png';


import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        console.log('store', store.getState())
        return (
            <Provider store={store}>
            <BrowserRouter>
            <div className = {styles.main}>
                <nav>
                    <ul className={styles.iconContainer}>
                        <li>
                            <Link to="/" className={styles.title}>Главная <img className={styles.icon} alt="factory" src={icon2} title='Surface of the Planet'/></Link>
                        </li><br />
                        <li>
                            <Link to="/information" className={styles.title}>Информация<img className={styles.icon} alt="solar" src={icon1} title='SolarSystem'/></Link>
                        </li><br />
                        <li>
                            <Link to="/commucations" className={styles.title}>Новый тест<img className={styles.icon} alt="stars" src={icon3} title='Star map'/></Link>
                        </li><br />
                        <li>
                            <Link to="/defenceData" className={styles.title}>Лабиринт<img className={styles.icon} alt="ship2" src={cup} title='SpacePort'/></Link>
                        </li><br />
                        <li>
                            <Link to="/DigitalContent" className={styles.title}>Цифровой контент<img className={styles.icon} alt="planet" src={house} title='Planets'/></Link>
                        </li><br />
                    </ul>

                    <Switch>
                        <Route path="/DigitalContent">
                            <DigitalContent />
                        </Route>
                        <Route path="/information">
                            <EnterTest/>
                        </Route>
                        <Route path="/commucations">
                            {/* <Commucations /> */}
                            <NewTest />
                        </Route>
                        <Route path="/defenceData">
                            {/* <DefenceData /> */}
                            <Labirint/>
                        </Route>
                        <Route path="/">
                            <MainPage/>
                        </Route>
                    </Switch>
                </nav>
            </div>
            </BrowserRouter>
            </Provider>
        );
    }
}

