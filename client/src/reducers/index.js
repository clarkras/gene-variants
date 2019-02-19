const INITIAL_STATE = {
  selectedGene: null,
  groupBy: 'Alias',
  variants: [],
  genes: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_GENE':
      return {
        ...state,
        selectedGene: action.gene,
      };

    case 'SELECT_GROUP_BY':
      return {
        ...state,
        groupBy: action.property,
      };

    case 'SET_VARIANTS':
      return {
        ...state,
        variants: action.variants.map(v => {
          // Set null properties to an empty string.
          Object.keys(v).forEach(key => {
            if (v.hasOwnProperty(key) && !v[key]) v[key] = '';
          });

          return v;
        }),
      };

    case 'SET_GENES':
      return {
        ...state,
        genes: action.genes,
      };

    default:
      return state
  }
};

export default rootReducer