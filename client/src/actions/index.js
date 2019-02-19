import config from '../config';

export const setGenes = genes => ({
  type: 'SET_GENES',
  genes
});

export const setCurrentGene = gene => ({
  type: 'SELECT_GENE',
  gene
});

export const selectGroupBy = property => ({
  type: 'SELECT_GROUP_BY',
  property
});

export const setVariants = (gene, variants) => ({
  type: 'SET_VARIANTS',
  gene,
  variants,
});

export const fetchGenesByPrefix = (prefix) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`${config.API_PREFIX}?q=${prefix}`);
      const { genes } = await resp.json();
      dispatch(setGenes(genes));
    }
    catch (e) {
      console.error(e);
    }
  };
};

export const fetchVariants = (gene) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`${config.API_PREFIX}/${gene}/variants`);
      const { variants } = await resp.json();
      dispatch(setVariants(gene, variants));
    }
    catch (e) {
      console.error(e);
    }
  };
};
