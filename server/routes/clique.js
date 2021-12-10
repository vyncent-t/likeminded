const express = require('express');

const cliqueControls = require('../controllers/clique')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/create-clique
router.get('/create-clique', cliqueControls.findClique)

//POST METHOD
// CONNECTS TO /admin/create-clique
router.post('/create-clique', cliqueControls.postClique);


module.exports = router;