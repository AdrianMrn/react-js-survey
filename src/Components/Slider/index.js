import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Slider.css';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Page4 from '../Pages/Page4';
import Page5 from '../Pages/Page5';

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
                    <Page1 />
                </div>
                <div>
                    <Page2 />
                </div>
                <div>
                    <Page3 />
                </div>
                <div>
                    <Page4 />
                </div>
                <div>
                    <Page5 />
                </div>
            </Slider>
        );
    }
}

export default App;
