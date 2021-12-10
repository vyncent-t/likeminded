const express = require('express');

const adminControls = require('../controllers/admin')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/create-clique
// router.get('/create-clique', adminControls.postAddClique)

//POST METHOD
// CONNECTS TO /admin/create-clique
router.post('/create-clique', adminControls.postAddClique);


module.exports = router;