import React from 'react';

const createItems = () =>{
    const items = Array(36).fill({hasItem: false, checked: false});
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex] = {hasItem: true, checked: false};
    return items;
}

const Game = () => {
    const [items, setItems] = useState(createItems());

    return (
        <div>
            <h2>Game Component</h2>
        </div>
    );
};

export default Game;