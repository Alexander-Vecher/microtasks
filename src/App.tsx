import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

/*import {Button} from "./components/Button";*/
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
        /*<>
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
        </>*/
)
}


export default App;
