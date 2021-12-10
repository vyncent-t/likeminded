const express = require('express');

const cliqueControls = require('../controllers/clique')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/clique
router.get('/clique', cliqueControls.findAllClique)

// CONNECTS TO /admin/clique-id
router.get('/clique-id', cliqueControls.findClique)

//POST METHOD
// CONNECTS TO /admin/clique
router.post('/clique', cliqueControls.postClique);


module.exports = router;