import React from 'react';
import renderer from 'react-test-renderer';

import GreetingPanel from './GreetingPanel';

const component = renderer.create(<GreetingPanel />,);
let greet = component.toJSON();

describe('GreetingPanel', () => {
    it('user should view component', () => {
        expect(greet).toMatchSnapshot();
    });
});
