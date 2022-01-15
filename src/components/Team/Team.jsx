import React, { useState, useEffect }  from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "./team.scss"

// Images
import team01 from '@root/assets/images/team/team-01.png';
import team02 from '@root/assets/images/team/team-02.png';
import team03 from '@root/assets/images/team/team-03.png';
import team01Webp from '@root/assets/images/team/team-01.webp';
import team02Webp from '@root/assets/images/team/team-02.webp';
import team03Webp from '@root/assets/images/team/team-03.webp';

export default function(){
    const [swiper, setSwiper] = useState(null);
    const [settings, setSettings] = useState({
        slidesPerView: 3,
        loop: window.innerWidth < 768,
        centeredSlides: window.innerWidth < 768,
        onInit(swiper){
            setSwiper(swiper);
        }
    });

    const resizeHandler = () => {
        setSettings({
            ...settings,
            centeredSlides: window.innerWidth < 768,
            loop: window.innerWidth < 768,
        });
    };

    useEffect(() => {
        if(swiper !== null){
            swiper.update();
        }
    }, [settings]);

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <div className="team">
            <h2 className="team__title">
                <i></i><i></i><i></i><i></i>
                <span>our team</span>
            </h2>
            <div className="team__container">
                <Swiper className="team__swiper" {...settings}>
                    <SwiperSlide>                        
                        <div className="team__item">
                            <picture>
                                <source srcSet={team01Webp} type="image/webp" />
                                <img src={team01} alt="image" />
                            </picture>
                            <span>Member Name</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team__item">
                            <picture>
                                <source srcSet={team02Webp} type="image/webp" />
                                <img src={team02} alt="image" />
                            </picture>
                            <span>Member Namesssss</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team__item">
                            <picture>
                                <source srcSet={team03Webp} type="image/webp" />
                                <img src={team03} alt="image" />
                            </picture>
                            <span>Member Name</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}