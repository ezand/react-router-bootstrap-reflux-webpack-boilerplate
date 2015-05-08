'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var Router = require('react-router');
var RouterBootstrap = require('react-router-bootstrap');

var debug = require('debug');
var Button = Bootstrap.Button;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ButtonLink = RouterBootstrap.ButtonLink;

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>Application</h1>
                <ButtonLink to="/about" bsSize="xsmall" bsStyle="success">About</ButtonLink>
                <ButtonLink to="/inbox" bsSize="xsmall" bsStyle="danger">Inbox</ButtonLink>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;
