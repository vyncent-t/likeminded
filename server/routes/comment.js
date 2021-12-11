const express = require('express');

const commentControls = require('../controllers/comment')

const router = express.Router()

//GET METHOD
// CONNECTS TO /admin/comment
router.get('/comment', commentControls.findAllComment)

// CONNECTS TO /admin/comment-id
router.get('/comment-id', commentControls.findByIdComment)

//PUT METHOD
router.put('/comment-id', commentControls.editComment)

//DELETE METHOD
router.post('/comment-delete', commentControls.deleteComment)



//POST METHOD
// CONNECTS TO /admin/comment
router.post('/comment', commentControls.postComment);


module.exports = router;