import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/components/hello-world';

const shallowRenderer = TestUtils.createRenderer();

describe("HelloWorld", function() {
    it("renders a div that says hello world", function() {
        var hello = shallowRenderer.render(<HelloWorld />); 

        var component = shallowRenderer.getRenderOutput();
        expect(component).toBeDefined();
        expect(component.type).toMatch('div');
        expect(component.props.children).toMatch('Hello World');
    });
});
