import React from 'react';
import renderer from 'react-test-renderer';
import GeneSelectDropdown from '../GeneSelectDropdown';

/*global jest, it, expect*/

it('renders without crashing', () => {
  const props = {
    genesOptions: [],
    setCurrentGene: () => {},
    fetchVariants: () => {},
    fetchGenesByPrefix: () => {},
  };

  // noinspection JSUnresolvedFunction
  const tree = renderer.create(<GeneSelectDropdown {...props} />);

  // noinspection JSUnresolvedFunction
  expect(tree).toMatchSnapshot();
});