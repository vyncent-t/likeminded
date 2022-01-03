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
    // can just query for all plans whos parent_event is eventID
    // event_plans: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Plan'
    // }],
    // can just query for all comments whos event_context is eventID
    // event_comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }]
})

const Event = model('Event', eventSchema);

module.exports = Event;