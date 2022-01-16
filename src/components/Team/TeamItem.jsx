import React from 'react';

// Images
import back from '@root/assets/images/team/back.png';

export default function({ avatar, text, prof }){
    return (
        <div className="team-item">
            <img src={back} alt="back" className="team-item__back" />
            <picture>
                <img src={avatar.png} alt="personaje" className="team-item__personaje" />
            </picture>
            <p className="team-item__text">{text}</p>
            <div className="team-item__prof">
                <p>{prof}</p>
            </div>
        </div>
    );
}