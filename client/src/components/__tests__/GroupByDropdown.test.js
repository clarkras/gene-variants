import React from 'react';
import renderer from 'react-test-renderer';
import GroupByDropdown from '../GroupByDropdown';

/*global jest, it, expect*/

it('renders without crashing', () => {
  const props = {
    onChange: () => {},
  };

  const tree = renderer.create(<GroupByDropdown {...props} />);

  expect(tree).toMatchSnapshot();
});