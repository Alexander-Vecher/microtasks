import React from 'react';

type ButtonTypeProps={
    title:string
    callBack:(title:string)=>void

}


export const Button = (props:ButtonTypeProps) => {
    const onClickButtonHundler =()=>{
        props.callBack(props.title)

    }
    return (
       <button onClick={onClickButtonHundler}>{props.title}</button>
    );
};



