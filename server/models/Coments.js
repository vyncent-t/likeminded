const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    event_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    event_name: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        required: true
    },
    comment_body: {
        type: String,
        required: true
    }
})