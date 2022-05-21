import React from "react";
import './Score.css'

function Score({score, playAgain}) {
    return(
        <div className="Score">
            <p className="gameover">GAME OVER</p>
            <p>Your Score: {score}</p>
            <p className="highscore">High Score:</p>
            <button className="btn btn-primary btn-lg" id="share-btn">SHARE<i className="bi bi-share-fill"></i></button>
            <button className="btn btn-primary btn-lg" id="playagain-btn" onClick={playAgain}>REPLAY<i className="bi bi-arrow-clockwise"></i></button>
        </div>
    );
};

export default Score;