const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    event_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    event_name: {
        type: String,
        required: true,
    },
    // created: {
    //     type: Date,
    //     required: true
    // },
    event_about: {
        type: String,
        required: true
    },
    event_plans: [{
        type: Schema.Types.ObjectId,
        ref: 'Plans'
    }],
    event_comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

const Event = model('Event', eventSchema);

module.exports = Event;