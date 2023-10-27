import React from "react";
import { currentMoney, onClickFilter } from "./App";

type Current = {
    MMmoney: onClickFilter
    Mmoney:currentMoney;
}
export const NewComponent = (props:Current) => {
    return (
        <>
            <ul>
                {props.Mmoney.map((objFromMoneyArr, index) => {
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
            <button onClick={() => props.MMmoney('all')}>all</button>
            <button onClick={() => props.MMmoney('ruble')}>ruble</button>
            <button onClick={() => props.MMmoney('dollars')}>dollar</button>
        </>
    )
}