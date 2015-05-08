'use strict';

var Reflux = require('reflux');
var actions = require('../actions/Actions');

var person = {
    'name': 'Eirik Sand',
    'age': '34',
    'avatar': 'https://en.gravatar.com/userimage/28634752/aada58d2f4a560382ba0ab7bae9573ac.png?size=200'
};

var PersonStore = Reflux.createStore({
    listenables: [actions],

    onUpdateAge(){
        person.age = Math.random() * 100;
        this.trigger({person});
    },

    getInitialState() {
        return {person};
    }
});

module.exports = PersonStore;
