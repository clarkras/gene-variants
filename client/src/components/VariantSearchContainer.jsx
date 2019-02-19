import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import * as actions from '../actions';
import * as selectors from '../selectors'

import GeneSelectDropdown from './GeneSelectDropdown';
import GroupByDropdown from './GroupByDropdown';
import VariantTable from './VariantTable';

export class VariantSearch extends Component {
  static propTypes = {
    setCurrentGene: PropTypes.func.isRequired,
    selectedGene: PropTypes.string,
    groupBy: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.object).isRequired,
    genesOptions: PropTypes.array.isRequired,
    fetchVariants: PropTypes.func.isRequired,
    fetchGenesByPrefix: PropTypes.func.isRequired,
  };

  render() {
    const { selectedGene, variants, groupBy, setCurrentGene, selectGroupBy, fetchVariants, fetchGenesByPrefix, genesOptions } = this.props;

    return (
      <div>
        <div className="dropdown-container">
          <GeneSelectDropdown
            selectedGene={selectedGene}
            setCurrentGene={setCurrentGene}
            fetchVariants={fetchVariants}
            fetchGenesByPrefix={fetchGenesByPrefix}
            genesOptions={genesOptions}
          />
          <GroupByDropdown onChange={selectGroupBy} />
        </div>
        <div className="variants-table-container">
          <VariantTable variants={variants} groupBy={groupBy} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    selectedGene: selectors.getSelectedGene(state),
    groupBy: selectors.getGroupBy(state),
    variants: selectors.getVariants(state),
    genesOptions: selectors.getGenes(state),
  }),
  dispatch => ({
    setCurrentGene: gene => dispatch(actions.setCurrentGene(gene)),
    selectGroupBy: property => dispatch(actions.selectGroupBy(property)),
    fetchVariants: gene => dispatch(actions.fetchVariants(gene)),
    fetchGenesByPrefix: prefix => dispatch(actions.fetchGenesByPrefix(prefix)),
  })
)(VariantSearch)
