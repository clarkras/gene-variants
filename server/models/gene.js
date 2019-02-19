class Gene {
  /**
   * Construct.
   *
   * @param {string} name The gene's name.
   */
  constructor(name) {
    this.name = name;

    // An Array of objects, each containing the variant's attributes.
    this.variants = [];
  }

  /**
   * Adds a variant.
   *
   * @param {object} attributes An object containing variant attributes.
   */
  addVariant(attributes) {
    this.variants.push(attributes);
  }

  /**
   * Returns a serializable object representation of this Gene.
   */
  toSerializableObject() {
    const sortKey = 'ProteinChange';

    return {
      name: this.name,
      variants: this.variants.sort((a, b) => {
        if (!a[sortKey]) return -1;
        if (!b[sortKey]) return 1;
        return a[sortKey].localeCompare(b[sortKey])
      }),
    };
  }

  /**
   * Returns a string representation of this Gene.
   */
  toString() {
    return `${this.name}: ${this.variants.length} variants`;
  }
}

module.exports = Gene;
