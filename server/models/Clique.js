const { Schema, model } = require('mongoose');

const cliqueSchema = new Schema({
    cliqueAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cliqueName: {
        type: String,
        required: true,
    },
    cliqueMembers: [{
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
    cliqueEvents: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }
})

const Clique = model('Clique', cliqueSchema);

module.exports = Clique;