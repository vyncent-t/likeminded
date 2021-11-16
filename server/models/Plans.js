const { Schema, model } = require('mongoose');

const planSchema = new Schema({
    plan_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    plan_name: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        required: true
    },
    total_votes: {
        type: Number,
        required: true
    },
    favored_by: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    plan_about: {
        type: String,
        required: true
    },
    plan_comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})