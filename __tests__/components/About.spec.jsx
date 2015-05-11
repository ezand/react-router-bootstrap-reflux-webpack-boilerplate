"use strict";

jest.dontMock('../../src/components/About.jsx');

describe('About', () => {
    it('changes the age after click', () => {
        var React = require('react/addons');
        var About = require('../../src/components/About');
        var TestUtils = React.addons.TestUtils;

        //var about = TestUtils.renderIntoDocument(
        //    <About />
        //);

        // TODO add more tests

        //expect(about).toBeDefined();
    })
});
