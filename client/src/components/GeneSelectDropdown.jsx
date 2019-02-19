import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

export default class GeneSelectDropdown extends Component {
  static propTypes = {
    genesOptions: PropTypes.array.isRequired,
    selectedGene: PropTypes.string,
    setCurrentGene: PropTypes.func.isRequired,
    fetchVariants: PropTypes.func.isRequired,
    fetchGenesByPrefix: PropTypes.func.isRequired,
  };

  state = {
    prefix: '',
  };

  handleInputChange = (value) => {
    this.setState({ prefix: value });
    if (value.length > 1) this.props.fetchGenesByPrefix(value);
  };

  handleChange = ({ value }) => {
    this.props.setCurrentGene(value);
    this.props.fetchVariants(value);
  };

  // value={{ value: this.props.selectedGene, label: this.props.selectedGene }}
  render() {
    const options = this.props.genesOptions.map(gene => ({ value: gene, label: gene }));

    return (
      <div className="select-container">
        <h3>Gene</h3>
        <Select
          options={options}
          placeholder="Enter gene..."
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
          inputValue={this.state.prefix}
        />
      </div>
    );
  }
}
