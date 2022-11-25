import imgUno from './assets/images/img-1.jpg'
import MyButton from './components/MyButton';
import ItemFruts from './components/ItemFruts';
import WelcomeText from './components/WelcomeText';

const App = () => {
    
    const fruts = ['🍎', '🍐', '🍉'];
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