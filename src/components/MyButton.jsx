import React from 'react'

const MyButton = ({text}) => {
    const handleClickButton = (title) => {
        console.log("me diste click " + title)
    }

    return (
        // se puede enviar parametros a la funcion creando una funcion de flecha que reciba el parametro a enviar.
        <button onClick={() => handleClickButton(text)}>{text}</button>
    )
}

export default MyButton;
