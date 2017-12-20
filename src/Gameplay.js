import React, { Component } from 'react';
import './App.css';
import Millionere from './Millionere';


class Gameplay extends Component {

    render() {
        const Game = new Millionere();
        return (
            <div className="Gameplay">
                <div className="help">
                    <div id="fifty" title="Подсказа 50/50" onClick={Game.fifty.bind(Game)}></div>
                    <div id="call" title="Звонок другу" onClick={Game.call.bind(Game)}></div>
                    <div id="hall" title="Помощь зала" onClick={Game.hall.bind(Game)}></div>
                    <div id="hint"></div>
                </div>

                <div className="Question">
                    <div id="quest"></div>
                    <div id="startGame"><button id="start" onClick={Game.start.bind(Game)}>Начать игру</button></div>
                </div>
                <div className="Answers">
                    <div id="answer1" onClick={Game.answer.bind(Game, 1)}></div>
                    <div id="answer2" onClick={Game.answer.bind(Game, 2)}></div>
                    <div id="answer3" onClick={Game.answer.bind(Game, 3)}></div>
                    <div id="answer4" onClick={Game.answer.bind(Game, 4)}></div>
                </div>
            </div>
        );
    }
}

export default Gameplay;