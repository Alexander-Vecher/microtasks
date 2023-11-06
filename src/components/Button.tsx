import React from 'react';

type ButtonTypeProps={
    title:string
    callBack:()=>void

}


export const Button = (props:ButtonTypeProps) => {
    const onClickButtonHundler =()=>{
        props.callBack()
    }
    return (
       <button onClick={onClickButtonHundler}>+</button>
    );
};



