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


    const handleClick = (index: number) => {
        const newItems = [...items];
        newItems[index] = {...newItems[index], clicked: true};
        setItems(newItems);
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
        </div>
    );
};

export default Game;