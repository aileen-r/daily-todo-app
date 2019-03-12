import React from 'react';

import renderer from 'react-test-renderer';
import Gradient from '../Gradient';

test('renders correctly', () => {
  const tree = renderer.create(<Gradient />).toJSON();
  expect(tree).toMatchSnapshot();
});