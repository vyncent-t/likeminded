const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  comment_author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  plan_context: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
  },
  parent_context: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
  },
  comment_body: {
    type: String,
    required: true
  },
  // createdAt: {
  //     type: Date,
  //     default: Date.now,
  //     get: (timestamp) => dateFormat(timestamp),
  //     required: true
  // }
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;