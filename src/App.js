import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Score from './components/Score';
import './App.css';

function App() {
    const [score, setScore] = useState(0);
    const [statuses, setStatus] = useState([true, false]);
    const dunk = {shoeName: "Nike Dunk Low Retro White Black", shoeImg: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409", shoePrice: 250};
    const yeezy = {shoeName: "adidas Yeezy Boost 350 V2 Cinder" , shoeImg: "https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409", shoePrice: 350};
    const af1 = {shoeName: "Nike Air Force 1 Low White 07" , shoeImg: "https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409", shoePrice: 88};
    const [shoes, setShoes] = useState([dunk, yeezy]);

    const correct = () => {
        setScore(score + 1);
        nextShoe();
    };

    const incorrect = () => {
        setTimeout(() => {
            const maingame = document.getElementsByClassName('main-game')[0];
            //const background = document.getElementsByClassName('background')[0];
            const score = document.getElementsByClassName('Score')[0];
            maingame.classList.toggle('blurred');
            //background.classList.toggle('blurred');
            score.classList.toggle('show');  
        }, 1500)
    };

    const nextShoe = () => {
        const preShoe = document.getElementsByClassName('index1')[0];
        const secondShoe = document.getElementsByClassName('index2')[0];
        const vs = document.getElementById('vs');
        vs.style.zIndex = 0;
        preShoe.classList.toggle('phase2');
        secondShoe.classList.toggle('phase4');
        setTimeout(() => {
            secondShoe.classList.remove('index2');
            secondShoe.classList.add('index1');
            setStatus([!statuses[0], !statuses[1]]);
            const cards = document.getElementById('cards');
            preShoe.classList.toggle('phase3');
            setTimeout(() => {
                secondShoe.classList.toggle('phase4');
                secondShoe.classList.toggle('phase5');
                preShoe.classList.toggle('phase3');
                preShoe.classList.toggle('phase1');
                setTimeout(() => {
                    cards.appendChild(cards.firstElementChild);
                    secondShoe.classList.toggle('phase5');
                    preShoe.classList.toggle('phase1');
                    preShoe.classList.toggle('phase2');
                    preShoe.classList.add('index2');
                    preShoe.classList.remove('index1');
                    vs.style.zIndex = 3;
                }, 1000);
            }, 250);
        }, 750);
    };

    const playAgain = () => {
        //window.location.reload();
    };

    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <main className='main-game'>
                {/* <p>Score:</p> */}
                <h1 id='score'>{score}</h1>
                <h2 id="vs">VS</h2>
                <div id='cards' className='cards'>
                    <section className='index1'>
                        <Card shoe={shoes[0]} preshoe={shoes[1]} open={statuses[0]} correct={correct} incorrect={incorrect} id="1"></Card>
                    </section>
                    <section className='index2'>
                        <Card shoe={shoes[1]} preshoe={shoes[0]} open={statuses[1]} correct={correct} incorrect={incorrect} id="2"></Card>
                    </section>
                </div>
            </main>
            {/* <div className='background'></div> */}
            <Score score={score} playAgain={playAgain}></Score>
        </div>
    );
}

export default App;
