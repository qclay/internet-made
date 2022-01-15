import React, { useEffect } from 'react';
import PlusButton from '../PlusButton/PlusButton';
import Marquee from 'react-fast-marquee';
import { useState } from 'react';
import "./xoxo.scss";

// Images
import background from '@root/assets/images/xoxo/background.jpg';
import backgroundWebp from '@root/assets/images/xoxo/background.webp';
import backgroundMobile from '@root/assets/images/xoxo/background@mobile.jpg';
import backgroundMobileWebp from '@root/assets/images/xoxo/background@mobile.webp';
import barcode from '@root/assets/images/xoxo/barcode.png';
import texture from '@root/assets/images/xoxo/texture-right.png';

export default function(){
    const [settings, setSettings] = useState({
        gradient: false,
        speed: window.innerWidth * 0.301,
        play: window.innerWidth <= 1440,
        pauseOnHover: true,
        pauseOnClick: true
    });

    return (
        <div className="xoxo">
            <picture>
                <source srcSet={backgroundMobileWebp} media="(max-width: 991px)" type='image/webp' />
                <source srcSet={backgroundMobile} media="(max-width: 991px)" type='image/png' />
                <source srcSet={backgroundWebp} type='image/webp' />
                <img src={background} alt="" className="xoxo__background"/>
            </picture>
            <div className="xoxo__container">
                <Marquee {...settings}>
                    <div className="xoxo__white">
                        <div className="xoxo__col padding barcode">
                            <div className="xoxo__barcode">                        
                                <img src={barcode} alt="barcode" />
                            </div>
                        </div>
                        <div className="xoxo__col padding center">
                            <div className="xoxo__center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id vestibulum, 
                                    fames etiam. Pellentesque enim vitae leo faucibus eu. Dolor elit ac massa tempor, 
                                    sed tellus massa. 
                                </p>
                                <h2>
                                    <span>XOXO NFT</span> <span>INTERNET MADE</span>
                                </h2>
                            </div>
                        </div>
                        <div className="xoxo__col texture">
                            <div className="xoxo__texture">
                                <img src={texture} alt="texture" />
                            </div>
                        </div>
                    </div>
                </Marquee>

                <div className="xoxo__content container">
                    <div className="xoxo__left">
                        <h2>Vision On</h2>
                        <PlusButton className="xoxo__button">
                            <span>Internet Made</span>
                        </PlusButton>
                        <div className="xoxo__label-border">
                            <span>Internet made nft xoxo</span>
                            <span>Internet made nft xoxo</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Non id vestibulum, fames etiam. Pellentesque enim vitae leo 
                            faucibus eu. Dolor elit ac massa tempor, sed tellus massa. 
                        </p>
                    </div>
                    <div className="xoxo__right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id vestibulum, fames etiam. 
                            Pellentesque enim vitae leo faucibus eu. Dolor elit ac massa tempor, sed tellus massa. 
                            Ut in at ornare volutpat mauris suspendisse non sed consequat. Felis laoreet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}