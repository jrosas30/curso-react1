import React from 'react'
import ItemFruts from './ItemFruts';


const ListFruts = () => {
    const fruts = ['🍎', '🍐', '🍉'];
    return (
        <ul>
            {
                fruts.map((frut, index) => (
                    <ItemFruts key={index} frut={frut} />
                ))
            }
        </ul>
    )
}

export default ListFruts