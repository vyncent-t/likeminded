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
        created_clique: {
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
        created_event: {
            event_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Event'
                }
            ]
        },
        created_plan: {
            plan_id: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Plan'
                }
            ]
        },
        created_comment: {
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