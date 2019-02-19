/*global jest, it, expect*/

import rootReducer from './index';

it('has the correct initial state', () => {
  const state = rootReducer(undefined, {type: undefined });

  // noinspection JSUnresolvedFunction
  expect(state).toMatchSnapshot();
});

it('handles SELECT_GENE', () => {
  const selectedGene = 'GENE_1';
  const state = rootReducer({ foo: 123 }, {type: 'SELECT_GENE', selectedGene });

  // noinspection JSUnresolvedFunction
  expect(state).toMatchSnapshot();
});

it('handles SET_VARIANTS', () => {
  const variants = [
    'variant_1',
    'variant_2',
  ];
  const state = rootReducer({ foo: 123 }, {type: 'SET_VARIANTS', variants });

  // noinspection JSUnresolvedFunction
  expect(state).toMatchSnapshot();
});

// etc.
