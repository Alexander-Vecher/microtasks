import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";

function App() {
    /*const students = [
        {id:1, name:'James', age:8},
        {id:2, name:'Robert', age:12},
        {id:3, name:'Mikhael', age:13},
        {id:4, name:'William', age:16},
        {id:5, name:'Charles', age:7},
    ]
*/
    /*const MyFirstSubscriber =()=>{
        console.log('Hello Im Vasya')
    }
    const MySecondSubscriber =()=>{
        console.log('Hello Im Ivan')
    }*/
 /*   const onClickHandler = (name: string) => {
        console.log(name)*/
    /*  const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (name: number) => {
        console.log(name)
    }*/
    return (
        <div className="App">
           {/* <button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChanel-1
            </button>
            <button onClick={onClickHandler}>MyYouTubeChanel-2</button>*/}
            {/*<NewComponent/> */} {/*AAA={students}*/}
            {/*<button onClick={foo1}>1</button>
            <button onClick={(event)=>foo2(100200)}>2</button>*/}
            <Button name={'MyYouTubeChanel-1'}/>
            <Button name={'MyYouTubeChanel-2'}/>


        </div>
    );
}


    export default App;
