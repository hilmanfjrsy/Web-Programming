import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Route from '../Route';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Route/>
            </div>
        );
    }
}

if (document.getElementById('apps')) {
    ReactDOM.render(<Index />, document.getElementById('apps'));
}
