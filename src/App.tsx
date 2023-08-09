import React, {useState} from 'react';
import './App.css';

/*import {Button} from "./components/Button";*/

function App() {


    let[a,setA] = useState(1)


    const onClickHundler = () => {
        setA(++a)
        /*console.log(a)*/
    }
    const onClickHundler2 = () => {
        setA(a=0)
        /*console.log(a)*/
    }

    return (<div>
            <h1>
                {a}
            </h1>
            <button onClick={onClickHundler}>number</button>
            <button onClick={onClickHundler2}>0</button>
        </div>
    );
}


export default App;
