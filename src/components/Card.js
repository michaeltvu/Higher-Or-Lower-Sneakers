import React, { useEffect } from "react";
import "./Card.css"

function Card({shoe, preshoe, open, id, correct, incorrect}) {

    useEffect(() => {
        console.log(id + " "  + open);
    });

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
        const price = document.getElementsByClassName('shoe-price ' + id)[0];
        if (shoe.shoePrice >= preshoe.shoePrice) {
            console.log('CORRECT');
            price.style.color = 'rgb(0, 90, 0)';
            price.style.fontSize = '100px';
            correct();
            setTimeout(() => {
                price.style.fontSize = '48px';
            }, 1000)
        }
        else {
            console.log('INCORRECT');
            price.style.color = 'rgb(139, 0, 0)';
            incorrect();
        }
        console.log('opened');
        card.classList.toggle('open');
    };

    const guessLower = () => {
        const card = document.getElementsByClassName("shoe-card " + id)[0];
        const price = document.getElementsByClassName('shoe-price ' + id)[0];
        if (shoe.shoePrice <= preshoe.shoePrice) {
            console.log('CORRECT');
            price.style.color = 'rgb(0, 90, 0)';
            price.style.fontSize = '100px';
            correct();
            setTimeout(() => {
                price.style.fontSize = '48px';
            }, 1000)
        }
        else {
            console.log('INCORRECT');
            price.style.color = 'rgb(139, 0, 0)';
            incorrect();
        }
        console.log('opened');
        card.classList.toggle('open');
    };

    return(
        <div className={"shoe-card " + id + (open ? " open" : "")}>
            <p className={"shoe-name " + id}>{shoe.shoeName}</p>
            <img src={shoe.shoeImg} alt={shoe.shoeName + "Image"}></img>
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