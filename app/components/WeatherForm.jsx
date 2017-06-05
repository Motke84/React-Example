import React, { Component } from 'react';

export default class WeatherForm extends Component {
    handleOnSubmit(event) {
        event.preventDefault();
        var update = {};


        var location = this.refs.loc.value;


        if (location.length > 0)
            update.loc = location;

        this.props.onNewData(update);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input type="text" ref="loc" />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}
