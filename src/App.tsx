import React, {useState} from 'react';
import './App.css';
import {Input2} from "./components/Input2";
import {Button2} from "./components/Button2";
/*import {FullInput2} from "./components/FullInput2";*/




function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

let [title, setTitle]= useState('')
    /*const callBack=(title:string)=>{
        const newMessage={message: title};
        setMessage([newMessage, ...message])
    }

*/

    const Function=()=>{
        const newMessage={message: title};
        setMessage([newMessage, ...message])
        setTitle('')
}




        return (
        <div className="App">
            <div>
               {/* <FullInput2 callBack={callBack}/>*/}
                <Input2 setTitle={setTitle} title={title}/>
                <Button2 callBack={Function}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


export default App


















/*
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {FullInput} from "./components/FullInput";
/!*import {NewComponent} from "./NewComponent";*!/

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState("")
    const onClickHandler=(title:string)=> {
        let NewMessage= {message: title}

        setMessage([NewMessage, ...message])
    }
    const callBack=()=> {
        onClickHandler(title)
        setTitle('')
    }
    return (

        <div className="App">

            {/!*<FullInput onClickHandler={onClickHandler}/>*!/}
            <Input setTitle={setTitle} title={title} />
            <Button callBack={callBack} title={title} />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
*/







/*
/!*import {Button} from "./components/Button";*!/
type Type={
banknots: string;
    value: number;
        number: string;
}
export type onClickFilter=(nameButton: FilterType)=>void;

type FilterType = 'all'|'ruble'|'dollars'
export type currentMoney=Type[];
function App() {


    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney=money;
    if (filter==='ruble') {currentMoney= money.filter((filteredMoney)=>filteredMoney.banknots==='RUBLS')}
    if (filter==='dollars') {currentMoney= money.filter((filteredMoney)=>filteredMoney.banknots==='Dollars')}


 const onClickFilter=(nameButton:FilterType)=>{
     setFilter(nameButton)
 }
    return (
        <NewComponent Mmoney={currentMoney} MMmoney={onClickFilter}/>
        /!*<>
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span> {objFromMoneyArr.banknots}</span>
                        <span> {objFromMoneyArr.value}</span>
                        <span> {objFromMoneyArr.number}</span>
                    </li>
                )
                }
            )}
                </ul>
<button onClick={()=>onClickFilter('all')}>all</button>
<button onClick={()=>onClickFilter('ruble')}>ruble</button>
<button onClick={()=>onClickFilter('dollars')}>dollar</button>
        </>*!/
)
}


export default App;
*/
