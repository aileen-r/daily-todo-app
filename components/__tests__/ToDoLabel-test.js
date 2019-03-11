import React from 'react';

import renderer from 'react-test-renderer';
import ToDoLabel from '../ToDoLabel';

test('renders correctly', () => {
  const tree = renderer.create(<ToDoLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});