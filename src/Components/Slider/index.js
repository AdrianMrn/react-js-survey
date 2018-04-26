import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Slider.css';
import PageOne from '../Pages/PageOne';

class App extends Component {
    render() {
        const sliderSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...sliderSettings}>
                <div>
                    <PageOne />
                </div>
                <div>
                    <h3>Welke Vlamingen drinken Antwerps water?</h3>
                </div>
                <div>
                    <h3>Hoe snel kunnen we gebruikt water omzetten in drinkbaar water</h3>
                </div>
                <div>
                    <h3>Wie heeft de slimste meters? Het waternetnetwerk of het elektriciteitsnetwerk</h3>
                </div>
                <div>
                    <h3>Kan je een wijk bouwen zonder verwarming en toch warm water hebben?</h3>
                </div>
            </Slider>
        );
    }
}

export default App;
