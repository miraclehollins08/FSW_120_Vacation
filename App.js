import React, {Component} from 'react';

import "./App.css";

import Cards from "./Component/Cards";

import Header from "./Component/Header";

import cardsData from './Component/cardsData';

import Footer from "./Component/Footer";

import Spot from "./Component/Spot";

import "./style.css";

function App() {
    const cardsCompponents = cardsData.map(cards => <Cards place={cards.place} price={cards.price} timeToGo={cards.timeToGo} />)
        return (
            <div className = "App">
                <Header/>
                <Cards/>
                {cardsCompponents}
            </div>


        );
    }

export default App;