const { Schema, model } = require('mongoose');

const cliqueSchema = new Schema({
    clique_author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    clique_name: {
        type: String,
        required: true,
    },
    clique_members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    // created: {
    //     type: Date,
    //     required: true
    // },
    clique_about: {
        type: String,
        required: true
    },
    // can just query for all events who parent_clique is cliqueID
    // clique_events: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Event'
    // }
})

const Clique = model('Clique', cliqueSchema);

module.exports = Clique;