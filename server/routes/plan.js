const express = require('express');

const planControls = require('../controllers/plan')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/plan
router.get('/plan', planControls.findAllPlan)

// CONNECTS TO /admin/plan-id
router.get('/plan-id', planControls.findByIdPlan)

//PUT METHOD
router.put('/plan-id', planControls.editPlan)

//DELETE METHOD
router.post('/plan-delete', planControls.deletePlan)



//POST METHOD
// CONNECTS TO /admin/plan
router.post('/plan', planControls.postPlan);


module.exports = router;