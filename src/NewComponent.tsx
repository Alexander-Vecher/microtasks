import React from 'react';

type CarsType = {
    manufacturer: string,
    model: string
}

export let NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            {topCars.map((el: CarsType, index: number) => {
                    debugger
                    return (

                        <tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                }
            )
            }
        </table>

    )
}

