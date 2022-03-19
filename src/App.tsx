import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


export function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow Im VASYA!')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow Im IVAN!')
    // }
    /*const onClickHandler = (name: string) => {
        console.log(name)*/
    const ButtonFoo1 = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonFoo3 = () => {
        console.log('im stupid button')
    }

    let [a, setA] = useState(1)
    const onClick = () => {
        setA(++a)
        console.log(a)
    }

    const onClick1 = () => {
        setA(a = 0)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <Button name={'MyYouTubeChanel-1'} callBack={() => ButtonFoo1('im Vasya')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => ButtonFoo2('im Ivan')}/>
            <Button name={'Stupid BUTTON'} callBack={ButtonFoo3}/>
            <button onClick={onClick}>number</button>
            <button onClick={onClick1}>0</button>
        </div>
    )
}

