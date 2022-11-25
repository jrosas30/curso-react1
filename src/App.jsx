import imgUno from './assets/images/img-1.jpg'
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';

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
            <ListFruts />
        </>
    );
}

export default App