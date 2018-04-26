import React, { Component } from 'react';
import RangeSlider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './PageOne.css';

class PageOne extends Component {
    constructor() {
        super()
        this.state = {
            rangevalue: 25,
        }
    }

    handleRangeChange = (value) => {
        this.setState({
            rangevalue: value
        });
    }

    render() {
        const RenderWaves = (amount) => {
            const arr = [];
            for (let i = 0; i < amount; i++) {
                arr.push(<span key={`wave-${i}`} style={{ animationDelay: `${i / amount}s`, width: `${100 / amount}%` }}></span>);
            }
            return arr;
        }

        const { rangevalue } = this.state
        return (
            <div>
                <h3>Hoeveel water stroomt er per jaar door de leidingen van Water-Link uitgedrukt in aantal Olympische zwembaden?</h3>
                <div className='RangeSlider'>
                    <div className='RangeValue'>{rangevalue}</div>
                    <div className="glass">
                        <div className="wave" style={{ marginTop: 200 - (rangevalue * 2) }}>
                            {RenderWaves(50)}
                        </div>
                    </div>
                    <RangeSlider
                        min={0}
                        max={100}
                        //step={10}
                        value={this.state.rangevalue}
                        orientation='vertical'
                        onChange={this.handleRangeChange}
                        tooltip={false}
                    />
                </div>
            </div>
        );
    }
}

export default PageOne;
