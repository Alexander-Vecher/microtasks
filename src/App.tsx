import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";


export function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow Im VASYA!')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow Im IVAN!')
    // }
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div className="App">
            <button onClick={() => onClickHandler('VASYA')}><Button/></button>
            <button onClick={() => onClickHandler('IVAN')}>MyYouTubeChanel-2</button>
        </div>
    )
}

