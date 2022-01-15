import React from 'react';
import "./avatars.scss"
import AvatarsBackground from './AvatarsBackground';

export default function(){
    return (
        <div className="avatars" data-lazy-bg="/assets/images/avatars/background.png">
            <AvatarsBackground />
            <div className="avatars__content">
                <div className="avatars__title">
                    <i></i><i></i><i></i><i></i>
                    <h3>Avatars</h3>
                    <h2>8000</h2>
                </div>
                <p className="avatars__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id vestibulum, fames etiam. 
                    Pellentesque enim vitae leo faucibus eu. Dolor elit ac massa tempor, sed tellus massa. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id vestibulum, fames etiam. 
                    Pellentesque enim vitae leo faucibus eu.
                </p>
            </div>
        </div>
    );
}