import React, { useEffect, useState, useRef } from 'react';
import Card from './components/Card';
import Score from './components/Score';
import MainMenu from './components/MainMenu';
import './App.css';
import shoedata from './assets/shoes.json';

function App() {
    const [score, setScore] = useState(0);
    const [statuses, setStatus] = useState([true, false]);
    const temp = {shoeName: "" , shoeImg: "", shoePrice: 0};
    const [shoes, setShoes] = useState([temp, temp]);
    const changeShoe = useRef(false);
    const firstRender = useRef(true);

    useEffect(() => {
        if(!firstRender.current) {
            const preShoe = document.getElementsByClassName('shoe1')[0];
            const secondShoe = document.getElementsByClassName('shoe2')[0];
            const cards = document.getElementById('cards');
            
            secondShoe.classList.toggle('shoe2');
            preShoe.classList.toggle('shoe1');

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
                changeShoe.current = !changeShoe.current;
            }, 1000);
            console.log('checking');
        }
        if(firstRender.current) {
            firstRender.current = false;
        }
    }, [shoes]);

    useEffect(() => {
        const shoe1data = shoedata[Math.floor(Math.random() * 796)];
        const shoe1 = {shoeName: shoe1data.shoeName, shoeImg: shoe1data.thumbnail, shoePrice: getShoePrice(shoe1data)};
        const shoe2data = shoedata[Math.floor(Math.random() * 796)];
        const shoe2 = {shoeName: shoe2data.shoeName, shoeImg: shoe2data.thumbnail, shoePrice: getShoePrice(shoe2data)};
        firstRender.current = true;
        setShoes([shoe1, shoe2]);
    }, []);

    const getShoePrice = (shoe) => {
        if(shoe.resellPrices != null) {
            if(shoe.resellPrices.flightClub != null) {
                if(shoe.resellPrices.flightClub[10] != null) {
                    return shoe.resellPrices.flightClub[10];
                }
                else if(shoe.resellPrices.flightClub[7] != null) {
                    return shoe.resellPrices.flightClub[7];
                }
            }
        }
        return shoe.lowestResellPrice.stockX;
    };

    const play = () => {
        const mainGame = document.getElementsByClassName('main-game')[0];
        mainGame.classList.add('played');
    }

    const correct = () => {
        setScore(score + 1);
        nextShoe();
    };

    const incorrect = () => {
        setTimeout(() => {
            const maingame = document.getElementsByClassName('main-game')[0];
            const score = document.getElementsByClassName('Score')[0];
            maingame.classList.toggle('blurred');
            maingame.classList.toggle('played');
            score.classList.toggle('show');  
        }, 1000)
    };

    const nextShoe = () => {
        const preShoe = document.getElementsByClassName('index1')[0];
        const secondShoe = document.getElementsByClassName('index2')[0];
        preShoe.classList.toggle('shoe1');
        secondShoe.classList.toggle('shoe2');
        preShoe.classList.toggle('phase2');
        secondShoe.classList.toggle('phase4');
        setTimeout(() => {
            secondShoe.classList.remove('index2');
            secondShoe.classList.add('index1');
            setStatus([!statuses[0], !statuses[1]]);
            preShoe.classList.toggle('phase3');
            setTimeout(() => {
                const newshoedata = shoedata[Math.floor(Math.random() * 796)];
                const newshoe = {shoeName: newshoedata.shoeName, shoeImg: newshoedata.thumbnail, shoePrice: getShoePrice(newshoedata)};
                console.log(newshoe);
                setShoes(changeShoe.current ? [shoes[0], newshoe] : [newshoe, shoes[1]]);
            }, 250);
        }, 750);
    };

    const playAgain = () => {
        const maingame = document.getElementsByClassName('main-game')[0];
        const score = document.getElementsByClassName('Score')[0];
        const index2 = changeShoe.current ? document.getElementsByClassName('shoe-card 1')[0] : document.getElementsByClassName('shoe-card 2')[0];

        maingame.classList.toggle('blurred');
        maingame.classList.toggle('played');
        score.classList.toggle('show');
        setStatus(changeShoe.current ? [false, true] : [true, false]);
        index2.classList.toggle('open');
        setScore(0);
        const shoe1data = shoedata[Math.floor(Math.random() * 796)];
        const shoe1 = {shoeName: shoe1data.shoeName, shoeImg: shoe1data.thumbnail, shoePrice: getShoePrice(shoe1data)};
        const shoe2data = shoedata[Math.floor(Math.random() * 796)];
        const shoe2 = {shoeName: shoe2data.shoeName, shoeImg: shoe2data.thumbnail, shoePrice: getShoePrice(shoe2data)};
        firstRender.current = true;
        setShoes([shoe1, shoe2]);
    };

    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <MainMenu clickPlay={play}></MainMenu>
            <main className='main-game'>
                <h1 id='score'>{score}</h1>
                <div id='cards' className='cards'>
                    <section className='index1'>
                        <Card shoe={shoes[0]} preshoe={shoes[1]} open={statuses[0]} correct={correct} incorrect={incorrect} id="1"></Card>
                    </section>
                    <section className='index2'>
                        <Card shoe={shoes[1]} preshoe={shoes[0]} open={statuses[1]} correct={correct} incorrect={incorrect} id="2"></Card>
                    </section>
                </div>
            </main>
            <Score score={score} playAgain={playAgain}></Score>
        </div>
    );
}

export default App;
