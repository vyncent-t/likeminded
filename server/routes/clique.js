const express = require('express');

const cliqueControls = require('../controllers/clique')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/clique
router.get('/clique', cliqueControls.findAllClique)

// CONNECTS TO /admin/clique-id
router.get('/clique-id', cliqueControls.findByIdClique)

//PUT METHOD
router.put('/clique-id', cliqueControls.editClique)

//DELETE METHOD
router.post('/clique-delete', cliqueControls.deleteClique)



//POST METHOD
// CONNECTS TO /admin/clique
router.post('/clique', cliqueControls.postClique);


module.exports = router;