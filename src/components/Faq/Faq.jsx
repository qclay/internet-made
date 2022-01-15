import React from 'react';
import "./faq.scss";

// Images
import rhombus from '@root/assets/images/faq/rhombus.png';
import corner from '@root/assets/images/faq/corner.png';
import FaqItem from './FaqItem';

const data = [
    {
        id: 0, 
        question: "Lorem ipsum dolor sit amet?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 1, 
        question: "Mattis duis suscipit?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 2, 
        question: "Senectus varius nullam orci?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 3, 
        question: "Mattis duis suscipit?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 4, 
        question: "Senectus varius nullam orci?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 5, 
        question: "Lorem ipsum dolor sit amet?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 6, 
        question: "Mattis duis suscipit?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 7, 
        question: "Senectus varius nullam orci?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
]

export default function(){
    return (
        <div className="faq">
            <h2 className="faq__title">
                <i></i><i></i><i></i><i></i>
                <span>Faq</span>
            </h2>
            <div className="faq__limiter">                
                <div className="faq__container container">
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_1" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_2" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_3" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_4" />
                    <div className="faq__wrapper">
                        <img src={corner} alt="corner" className="faq__corner faq__corner_1" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_2" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_3" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_4" />
                        <div className="faq__content">
                            {data.map(item => (
                                <FaqItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}