const express = require('express');

const userControls = require('../controllers/user')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/user
router.get('/user', userControls.findAllUser)

// CONNECTS TO /admin/user-id
router.get('/user-id', userControls.findByIdUser)

//PUT METHOD
router.put('/user-id', userControls.editUser)

//DELETE METHOD
router.post('/user-delete', userControls.deleteUser)



//POST METHOD
// CONNECTS TO /admin/user
router.post('/user-create', userControls.postUser);


module.exports = router;