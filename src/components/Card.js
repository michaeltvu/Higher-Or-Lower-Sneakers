import React, { useState, useEffect } from "react";
import "./Card.css"

function Card({shoe, preshoe, open, id, score, status}) {
    const [guessed, setGuessed] = useState('false');
    useEffect(() => {
        console.log('test');
    }, []);

    const enterUp = () => {
        const upBtn = document.getElementsByClassName("up-button " + id)[0];
        upBtn.classList.remove('bi-arrow-up-circle');
        upBtn.classList.add('bi-arrow-up-circle-fill');
    };

    const leaveUp = () => {
        const upBtn = document.getElementsByClassName("up-button " + id)[0];
        upBtn.classList.remove('bi-arrow-up-circle-fill');
        upBtn.classList.add('bi-arrow-up-circle');
    };

    const enterDown = () => {
        const upBtn = document.getElementsByClassName("down-button " + id)[0];
        upBtn.classList.remove('bi-arrow-down-circle');
        upBtn.classList.add('bi-arrow-down-circle-fill');
    };

    const leaveDown = () => {
        const upBtn = document.getElementsByClassName("down-button " + id)[0];
        upBtn.classList.remove('bi-arrow-down-circle-fill');
        upBtn.classList.add('bi-arrow-down-circle');
    };

    const guessHigher = () => {
        const card = document.getElementsByClassName("shoe-card " + id)[0];
        if (shoe.shoePrice >= preshoe.shoePrice) {
            console.log('CORRECT');
            score();
        }
        else {
            console.log('INCORRECT');
        }
        card.classList.toggle('open');
        //setGuessed(!open);
    };

    const guessLower = () => {
        const card = document.getElementsByClassName("shoe-card " + id)[0];
        if (shoe.shoePrice <= preshoe.shoePrice) {
            console.log('CORRECT');
            score();
        }
        else {
            console.log('INCORRECT');
        }
        card.classList.toggle('open');
        setGuessed(!open);
    };

    return(
        <div className={"shoe-card " + id + (open ? " open" : "")}>
            <p className={"shoe-name " + id}>{shoe.shoeName}</p>
            <img src={shoe.shoeImg} alt="shoepic"></img>
            <p className={"shoe-price " + id}>${shoe.shoePrice}</p>
            <div className="buttons">
                <i className={id + " up-button bi-arrow-up-circle"}
                    onMouseEnter={enterUp} 
                    onMouseLeave={leaveUp}
                    onClick={guessHigher}>
                </i>
                <p className="dollar">${preshoe.shoePrice}</p>
                <i className={id + " down-button bi-arrow-down-circle"} 
                    onMouseOver={enterDown}
                    onMouseLeave={leaveDown}
                    onClick={guessLower}>
                </i>
            </div>
        </div>
    );
}

export default Card;