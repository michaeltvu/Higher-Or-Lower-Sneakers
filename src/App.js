import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
    const [sneakers, setSneakers] = useState([]);
    const [score, setScore] = useState(0);
    const [statuses, setStatus] = useState([true, false, false]);
    const dunk = {shoeName: "Nike Dunk Low Retro White Black", shoeImg: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409", shoePrice: 250};
    const yeezy = {shoeName: "adidas Yeezy Boost 350 V2 Cinder" , shoeImg: "https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409", shoePrice: 350};
    
    const increaseScore = () => {
        setScore(score + 1);
        gameOver();
    };
    const gameOver = () => {
        const preShoe = document.getElementsByClassName('index1')[0];
        preShoe.classList.toggle('phase2');
        setTimeout(() => {
            setStatus([false, true, false]);
            const cards = document.getElementById('cards');
            cards.appendChild(cards.firstElementChild);
            preShoe.classList.toggle('phase2');
        }, 1000);
    };
    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <h1>Sneakers</h1>
            <h3>Score: {score}</h3>
            <h2>VS</h2>
            <div className='carousel'> 
                <div id='cards' className='cards'>
                    <section className='index1'>
                        <Card shoe={dunk} preshoe={yeezy} open={statuses[0]} score={increaseScore}id="1"></Card>
                    </section>
                    <section className='index2'>
                        <Card shoe={yeezy} preshoe={dunk} open={statuses[1]} score={increaseScore} id="2"></Card>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
