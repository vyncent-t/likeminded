const { Schema, model } = require('mongoose');

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
  event_context: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  comment_body: {
    type: String,
    required: true
  }
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;