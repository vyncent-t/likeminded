const { Schema, model } = require('mongoose');
// const { Plans } = require('.');

const planSchema = new Schema({
    plan_author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parent_event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    plan_name: {
        type: String,
        required: true,
        unique: true
    },
    // created: {
    //     type: Date,
    //     required: true
    // },
    // total_votes: {
    //     type: Number,
    //     // required: true
    // },
    favored_by: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    plan_about: {
        type: String,
        required: true
    },

    // can just query for all comments whos plan_conext is planID
    // plan_comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comments'
    // }]
})

const Plan = model('Plan', planSchema);

module.exports = Plan;