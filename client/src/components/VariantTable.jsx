import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const COLUMNS = [{
  Header: 'Nucleotide Change',
  accessor: 'NucleotideChange'
}, {
  Header: 'Protein Change',
  accessor: 'ProteinChange'
}, {
  Header: 'Alias',
  accessor: 'Alias'
}, {
  Header: 'Region',
  accessor: 'Region'
}, {
  Header: 'Reported Classification',
  accessor: 'ReportedClassification'
}, {
  Header: 'Last Evaluated',
  accessor: 'LastEvaluated'
}, {
  Header: 'Last Updated',
  accessor: 'LastUpdated'
}, {
  Header: 'More Info',
  accessor: 'Source',
  Cell: row => (
    <div><a href={row.original.URL} target="_blank" rel="noreferrer noopener">{row.value}</a></div>
  ),
},];

export default class VariantTable extends Component {
  static propTypes = {
    variants: PropTypes.arrayOf(PropTypes.object).isRequired,
    groupBy: PropTypes.string,
  };

  render() {

    const pivotBy = this.props.groupBy ? [this.props.groupBy] : [];

    return <ReactTable
      className="-striped -highlight"
      data={this.props.variants}
      columns={COLUMNS}
      pivotBy={pivotBy}
    />
  }
}
