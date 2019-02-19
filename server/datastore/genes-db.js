const readline = require('readline');

const Gene = require('../models/gene');

class GenesDB {
  constructor() {
    this.index = [];
    this.genes = new Map();
  }

  fieldsToObject(fields) {
    return this.properties.reduce((acc, prop, i) => {
      acc[prop] = fields[i] || null;
      return acc;
    }, {});
  }

  loadFromTSV(stream) {
    const rl = readline.createInterface({
      input: stream,
      output: process.stdout,
      terminal: false,
    });

    const promise = new Promise((resolve) => {
      rl.on('close', () => {
        this.index = Array.from(this.genes.keys());
        resolve();
      });
    });

    let lineCount = 0;

    rl.on('line', (line) => {
      lineCount += 1;

      const fields = line.split('\t');

      if (lineCount === 1) {
        // Save the header property names for creating object properties from data attributes.
        // This allows some flexibility in the structure of the TSV file.
        this.properties = fields.map(f => f.replace(/ /g, ''));
        return;
      }

      const attributes = this.fieldsToObject(fields);
      const gene = attributes.Gene;

      if (gene) {
        const geneModel = this.genes.get(gene) || new Gene(gene);
        const attributes = this.fieldsToObject(fields);
        geneModel.addVariant(attributes);
        this.genes.set(gene, geneModel);
      }
    });

    return promise;
  }

  searchByPrefix(prefix) {
    const regexp = new RegExp(`^${prefix}`, 'i');
    return this.index.filter(gene => regexp.test(gene)).sort();
  }
}

module.exports = GenesDB;
