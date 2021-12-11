const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  comment_author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  parent_content: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  comment_body: {
    type: String,
    required: true,
    unique: true
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