import React, { Component } from 'react';

export default class WeatherMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var location = this.props.location;
        var tmp = this.props.tempature;
   
        return (
            <div>
                <h3>It is {tmp}C in {location}</h3>
            </div>
        );
    }
}
