import React, {ChangeEvent, useState} from 'react';

type InputTypeProps={
    setTitle: (title:string)=>void
    title:string
}

export const Input = (props:InputTypeProps) => {

    const onChageButtonHundler=(event: ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value= {props.title} onChange={onChageButtonHundler}/>
    );
};