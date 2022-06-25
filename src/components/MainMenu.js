import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/sneakerslogo.png';
import blacklogo from '../assets/sneakers.png';
import sneaker from '../assets/sneakers.png';
import './MainMenu.css';

function MainMenu({clickPlay}) {

    const enterPlay = () => {
        const playImage = document.getElementById('play-image');
        playImage.classList.remove('bi-play');
        playImage.classList.add('bi-play-fill');
    }

    const leavePlay = () => {
        const playImage = document.getElementById('play-image');
        playImage.classList.remove('bi-play-fill');
        playImage.classList.add('bi-play');
    }

    const play = () => {
        const logo = document.getElementsByClassName('logo')[0];
        const playButton = document.getElementsByClassName('play-button')[0];
        const playImage = document.getElementsByClassName('bi-play')[0]; 
        logo.src=blacklogo;

        logo.classList.add('played');
        playButton.classList.add('played');
        clickPlay();
    }

    return(
        <div className='MainMenu'>
            <img className='logo' src={logo}></img>
            <p className='play-button' onClick={play} onMouseEnter={enterPlay} onMouseLeave={leavePlay}>PLAY<i id='play-image' className="bi bi-play"></i></p>
        </div>
    );
}

export default MainMenu;