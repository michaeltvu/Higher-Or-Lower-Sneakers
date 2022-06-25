import React, { useEffect, useRef } from 'react';
import logo from '../assets/sneakerslogo.png';
import './Score.css';

function Score({score, playAgain}) {
    const highscore = useRef(0);

    useEffect(() => {
        if(localStorage.getItem("highscore") == null) {
            localStorage.setItem("highscore", 0);
        }
        else {
            if(score > highscore.current) {
                localStorage.setItem("highscore", score);
            }
            highscore.current = localStorage.getItem("highscore");
        }
    }, [score]);

    const play = () => {
        playAgain();
    };

    const enterPlay = () => {
        const playImage = document.getElementById('playagain-image');
        playImage.classList.remove('bi-play');
        playImage.classList.add('bi-play-fill');
    };

    const leavePlay = () => {
        const playImage = document.getElementById('playagain-image');
        playImage.classList.remove('bi-play-fill');
        playImage.classList.add('bi-play');
    };

    return(
        <div className="Score">
            <img className="logo" src={logo}></img>
            <p>Your Score: {score}</p>
            <p className="highscore">High Score: {highscore.current}</p>
            <p className='playagain-btn' onClick={play} onMouseEnter={enterPlay} onMouseLeave={leavePlay}>PLAY<i id='playagain-image' className="bi bi-play"></i></p>
        </div>
    );
};

export default Score;