import React from "react";

/*type NewComponentType = {
    AAA?: StudentType[]
}

type topCars= {
    Cars: CarsType[]}

    type CarsType={
    manufacturer: string
    model: string
}

type StudentType = {
    id: number,
    name: string,
    age: number
}*/

export const NewComponent = (/*props: topCars*/) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <table>
            {topCars.map((el, index) => {
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>)
            })}
        </table>
    )}
