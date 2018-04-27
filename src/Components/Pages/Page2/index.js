import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import './styles.css';

import { Chart } from 'react-google-charts';

class PageTwo extends Component {
    render() {
        const options = {
            region: 'BE',
            displayMode: 'region',
            resolution: 'provinces'
        };

        const data = [
            ['country'],
            ['BE-BRU'],
            ['BE-VLG'],
            ['BE-WAL'],
        ];
        const columns = [{
            'type': 'string',
            'label': 'Country'
        },
        {
            'type': 'number',
            'label': 'Number'
        }];

        return (
            <div>
                <Chart
                    chartType="GeoChart"
                    width={"500px"}
                    height={"500px"}
                    data={data}
                    columns={columns}
                    options={options}
                    graph_id="GeoChart"
                    legend_toggle={true} />
            </div>
        );
    }
}

export default PageTwo;
