const express = require('express');

const eventControls = require('../controllers/event')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/event
router.get('/event', eventControls.findAllEvent)

// CONNECTS TO /admin/event-id
router.get('/event-id', eventControls.findByIdEvent)

//PUT METHOD
router.put('/event-id', eventControls.editEvent)

//DELETE METHOD
router.post('/event-delete', eventControls.deleteEvent)



//POST METHOD
// CONNECTS TO /admin/event
router.post('/event', eventControls.postEvent);


module.exports = router;