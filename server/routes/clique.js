const express = require('express');

const cliqueControls = require('../controllers/clique')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/create-clique
// router.get('/create-clique', adminControls.postAddClique)

//POST METHOD
// CONNECTS TO /admin/create-clique
router.post('/create-clique', cliqueControls.postAddClique);


module.exports = router;