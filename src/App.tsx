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

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={() => ButtonFoo1('im Vasya')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => ButtonFoo2('im Ivan')}/>
            <Button name={'Stupid BUTTON'} callBack={ButtonFoo3}/>
        </div>
    )
}

