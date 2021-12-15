const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        created_cliques: {
            clique_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Clique'
                }
            ]
        },
        member_of: {
            clique_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Clique'
                }
            ]
        },
        created_events: {
            event_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Event'
                }
            ]
        },
        created_plans: {
            plan_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Plan'
                }
            ]
        },
        created_comments: {
            comment_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Comment'
                }
            ]
        }
    }
);

const User = model('User', userSchema);

module.exports = User;