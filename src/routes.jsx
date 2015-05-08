'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/App');
var About = require('./components/About');
var Inbox = require('./components/Inbox');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="about" path="/about" handler={About}/>
        <Route name="inbox" path="/inbox" handler={Inbox}/>
        <DefaultRoute handler={About}/>
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
