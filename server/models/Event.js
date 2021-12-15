const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    event_author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parent_clique: {
        type: Schema.Types.ObjectId,
        ref: 'Clique',
        required: true
    },
    event_name: {
        type: String,
        required: true,
    },
    event_about: {
        type: String,
        required: true
    },
    event_plans: [{
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    }],
    event_comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const Event = model('Event', eventSchema);

module.exports = Event;