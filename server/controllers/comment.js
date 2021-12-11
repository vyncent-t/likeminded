const Comment = require('../models/Comment')

// ref lecture 213
// right side is from the actions of the req left side is from schema
exports.postComment = (req, res, next) => {
    const userId = req.body.userId
    const planId = req.body.planId;
    const comment_body = req.body.comment_body;
    const comment = new Comment({
        comment_author: userId,
        parent_content: planId,
        comment_body: comment_body,
    });
    comment.save()
        .then(result => {
            console.log("Comment created")
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findAllComment = (req, res, next) => {
    Comment.find()
        .then(result => {
            console.log("Comment found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findByIdComment = (req, res, next) => {
    const comment_id = req.body.comment_id;
    Comment.findById(comment_id)
        .then(result => {
            console.log("Comment found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}


exports.editComment = (req, res, next) => {
    const comment_id = req.body.comment_id;
    const update_body = req.body.comment_body;
    Comment.findById(comment_id).then(comment => {
        comment.comment_body = update_body
        return comment.save()
    }).then(result => {
        console.log("Comment edited " + result)
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteComment = (req, res, next) => {
    const comment_id = req.body.comment_id;
    Comment.findByIdAndRemove(comment_id)
        .then(result => {
            console.log("Comment deleted" + result)
        })
        .catch(err => {
            console.log(err)
        })
}
