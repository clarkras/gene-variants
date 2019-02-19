import React from 'react';
import renderer from 'react-test-renderer';
import { VariantSearch } from '../VariantSearchContainer';

/*global jest, it, expect*/

jest.mock('react-select', () => 'Select');
jest.mock('react-table', () => 'ReactTable');

it('renders without crashing', () => {
  const props = {
    onChange: () => {},
    setCurrentGene: () => {},
    variants: [],
    genesOptions: [],
    fetchVariants: () => {},
    fetchGenesByPrefix: () => {},
    selectGroupBy: () => {},
  };

  const tree = renderer.create(<VariantSearch {...props} />);
  expect(tree).toMatchSnapshot();
});
