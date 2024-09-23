import {useState} from "react";
import './Game.css'

const createItems = () =>{
    const items = Array(36).fill({hasItem: false, checked: false});
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex] = {hasItem: true, checked: false};
    return items;
}

const Game = () => {
    const [items, setItems] = useState(createItems());
    const [tries, setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);


    const handleClick = (index: number) => {
        if(!gameOver && !items [index].checked){
            const newItems = [...items];
            newItems[index] = {...newItems[index], clicked: true};
            setItems(newItems);
            setTries(tries + 1);

            if (newItems[index].hasItem){
                setGameOver(true);
                alert('Вы нашли его 🎉! Игра завершена.')
            }
        }
    };

    const resetGame = () => {
        setItems(createItems());
        setTries(0);
        setGameOver(false);
    }

    return (
        <div className='game-container'>
            <div className="grid">
                {items.map((item, index) => (
                    <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`cell ${item.clicked ? (item.hasItem ? 'green': 'gray') : 'lightgray'}`}
                    >
                        {item.clicked && item.hasItem && '🎁'}
                    </div>
                ))}
            </div>
            <div className='game-controls'>
                <p>Попытки: {tries}</p>
                <button onClick={resetGame}>Сброс</button>
            </div>
        </div>
    );
};

export default Game;