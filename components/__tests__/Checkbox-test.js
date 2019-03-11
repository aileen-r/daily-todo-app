import React from 'react';

import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

test('renders correctly', () => {
  const tree = renderer.create(<Checkbox />).toJSON();
  expect(tree).toMatchSnapshot();
});