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
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

return (
        <table>
        <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
</tr>
    <tr>
        <td>{topCars[0].model}</td>
        <td>{topCars[1].model}</td>
        <td>{topCars[2].model}</td>
    </tr>
    <tr>
        <td>{topCars[0].manufacturer}</td>
        <td>{topCars[1].manufacturer}</td>
        <td>{topCars[2].manufacturer}</td>
    </tr>
</table>
)

   /* return (
        <ul>
            {props.AAA.map((el,index:number) => {
                return (
                    <li key={el.id}>{el.name}</li>)

            })}
        </ul>
    )*/
}