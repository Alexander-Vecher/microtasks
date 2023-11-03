import React, {ChangeEvent, useState} from "react";

type onClick = {
    onClickHandler: (title: string) => void;
}

export const FullInput = (props: onClick) => {
    let [title, setTitle] = useState("")
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.onClickHandler(title)
    }
    return (<div>
        <input onChange={onChangeHandler}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>)
}