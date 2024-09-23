import './App.css';
import Game from "./components/Game.tsx";

const App = () => {
        return (
            <div className="app">
                <h1 className='title'>Найди спрятанный подарок</h1>
                <Game />
            </div>
        );
};

export default App
