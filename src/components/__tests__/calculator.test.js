import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});