import React from 'react';

import renderer from 'react-test-renderer';
import EditButton from '../EditButton';

test('renders correctly', () => {
  const tree = renderer.create(<EditButton />).toJSON();
  expect(tree).toMatchSnapshot();
});