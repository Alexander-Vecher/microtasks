import React, {ChangeEvent, useState} from 'react';


type CallBack = {
    callBack: (title:string)=>void
}
export const FullInput2 = (props: CallBack) => {

    const [title, setTitle] = useState('')
    const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHundler = () => {
        props.callBack(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeHundler}/>
            <button onClick={onClickHundler}>+</button>
        </div>

    )
}

