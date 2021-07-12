import React, { Component} from 'react';

export class PasswordGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Password Generator:</h1>

                <p>Click button below to generate a random secure password: </p>
                <button className="btn btn-primary" onClick={this.incrementCounter}>Generate Secure Password</button>
                <label aria-live="polite">Password: <strong>{this.state.currentCount}</strong></label>

            </div>
        );
    }
}