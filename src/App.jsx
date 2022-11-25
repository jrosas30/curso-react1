import imgUno from './assets/images/img-1.jpg'

const MyButton = ({ text }) => {

    const handleClickButton = (title) => {
        console.log("me diste click " + title)
    }

    return (
        // se puede enviar parametros a la funcion creando una funcion de flecha que reciba el parametro a enviar.
        <button onClick={() => handleClickButton(text)}>{text}</button>
    )
}

const WelcomeText = ({ user }) => (user ? <h3>Online</h3> : <h3>Offline</h3>);




const fruts = ['🍎', '🍐', '🍉'];

const ItemFruts = ({ frut }) => {
    return (
        <li>{frut}</li>
    )
}

const App = () => {

    const title = "mi titulo";
    const usuario = false;

    return (
        <>
            <h1 className="text-center">{title.toUpperCase()}</h1>
            <img src={imgUno} alt="" />
            <MyButton text='boton 1' />
            <MyButton text='boton 2' />
            <MyButton text='boton 3' />
            <WelcomeText user={usuario} />
            <ul>
                {
                    fruts.map((frut, index) => (
                        <ItemFruts key={index} frut={frut} />
                    ))
                }
            </ul>
        </>
    );
}

export default App