'use strict';

var React = require('react');
var Reflux = require('reflux');
var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var Store = require('../stores/PersonStore');
var Actions = require('../actions/Actions');

var About = React.createClass({
    mixins: [Reflux.connect(Store)],

    render() {
        var p = this.state.person;
        return (<div>
            <h3>About</h3>
            <h4>{p.name}</h4>
            <h4>{p.age}</h4>
            <Button bsSize='xsmall' bsStyle='warning' onClick={Actions.updateAge}>Randomize age</Button><br />
            <img src={p.avatar}/>
        </div>);
    }
});

module.exports = About;
