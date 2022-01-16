import React from 'react';
import Marquee from "react-fast-marquee";
import "./presentationfooter.scss"

// Images
import zebra from '@root/assets/images/zebra.png';

export default function(){
    const settings = {
        speed: 100,
        gradient: false,
    };
    
    return (
        <div className="presentationfooter">
            <div className="presentationfooter__container" data-scroll-parent>
                <Marquee {...settings}>
                    {Array.from({length: window.innerWidth > 991 ? 2 : 1}).map((item, id) => ( // For big screens
                        <React.Fragment key={id}>
                            <div className="presentationfooter__item">
                                <p className='fashion'>
                                    fashion NFT fashion NFT fashion NFT 
                                </p>
                            </div>
                            <div className="presentationfooter__item">
                                <img src={zebra} alt="zebra" />
                            </div>
                            <div className="presentationfooter__item">
                                <p className='imade'>internet made</p>
                            </div>
                            <div className="presentationfooter__item">
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Non id vestibulum, fames etiam. Pellentesque enim vitae 
                                    leo faucibus eu. Dolor elit ac massa tempor, sed tellus massa.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}