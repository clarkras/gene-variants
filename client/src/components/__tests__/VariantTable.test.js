import React from 'react';
import renderer from 'react-test-renderer';
import VariantTable from '../VariantTable';

it('renders without crashing', () => {
  const props = {
    variants: [],
  };
  const tree = renderer.create(<VariantTable {...props} />);
  expect(tree).toMatchSnapshot();
});
