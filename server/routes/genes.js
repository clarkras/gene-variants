const express = require('express');
const router = express.Router();

/**
 * Creates the API routes and request/response handlers.

 * @param {GenesDB} genesDB The data access for fetching genes and variants.
 * @returns {Router|router}
 */
module.exports = (genesDB) => {
  router.get('/:name/variants', function(req, res) {
    const gene = genesDB.genes.get(req.params.name);

    res.json(gene.toSerializableObject());
  });

  router.get('/', (req, res) => {
    const prefix = req.query.q;
    const genes = genesDB.searchByPrefix(prefix);

    res.json({
      prefix,
      genes,
    });
  });

  return router;
};
