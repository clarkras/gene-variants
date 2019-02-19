export const getSelectedGene = state => state.selectedGene;

export const getGroupBy = state => state.groupBy;

export const getVariants = state => {
  const sortBy = state.groupBy || 'NucleotideChange';
  return state.variants.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
};

export const getGenes = state => state.genes;