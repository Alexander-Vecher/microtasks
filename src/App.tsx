import React from 'react';
import './App.css';


export function App() {
    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hellow Im VASYA!')
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hellow Im IVAN!')
    }*/
   /* const onClickHandler=(name:string)=>{
        console.log(name)
    }*/
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (num:number) => {
        console.log(num)
    }
    return (
        <div className="App">
            {/*<button onClick={()=>onClickHandler('VASYA')}>MyYouTubeChanel-1</button>
            <button onClick={()=>onClickHandler('IVAN')}>MyYouTubeChanel-2</button>*/}
<button onClick={foo1}>1</button>
<button onClick={()=>foo2(100200)}>2</button>


        </div>
    )
}

