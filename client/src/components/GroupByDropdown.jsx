import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select'

const options = [
  { value: '', label: 'No grouping' },
  { value: 'Alias', label: 'Alias' },
  { value: 'ProteinChange', label: 'Protein Change' },
  { value: 'NucleotideChange', label: 'Nucleotide Change' },
  { value: 'Region', label: 'Region' },
  { value: 'ReportedClassification', label: 'Reported Classification' },
];

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  handleChange = ({ value }) => this.props.onChange(value);

  render() {
    return (
      <div className="select-container">
        <h3>Group by</h3>
        <Select
          placeholder="Select group column"
          options={options}
          onChange={this.handleChange}
          defaultValue={options[1]}
        />
      </div>
    );
  }
}
