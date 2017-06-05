import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/OpenWeatherMap';

export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

        this.handleNewData = this.handleNewData.bind(this);
        console.log(this.state);
    }

    handleNewData(data) {
        this.setState({
            isLoading: true
        });

        var res = OpenWeatherMap.getTemp(data.loc).then((tmp) => {
            this.setState({
                loc: data.loc,
                tmp: tmp,
                isLoading: false
            });
        }, (error) => {
                this.setState({
                    isLoading: false
                });
                alert(error);
            });

        console.log(this.state);
    }

    render() {
        var { isLoading, loc, tmp } = this.state;



        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onNewData={this.handleNewData} />
                {this.renderMessage(isLoading, loc, tmp)}
            </div>
        );
    }


    renderMessage(isLoading, loc, tmp) {
        console.log(this.state);
        if (isLoading) {
            return <h3>Loading...</h3>
        }
        else if (loc && tmp) {
            return <WeatherMessage location={loc} tempature={tmp} />;
        }

    }


    static get defaultProps() {
        return {
            loc: "Tel-Aviv",
            tmp: "40"
        }
    }
}

