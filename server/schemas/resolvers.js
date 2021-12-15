const { Clique, Comment, Event, Plan, User } = require('../models/index')

const resolvers = {
    Query: {
        findAllUsers: async () => {
            return await User.find({})
        },
        findAllCliques: async () => {
            return await Clique.find({})
        },
        findAllEvents: async () => {
            return await Event.find({})
        },
        findAllPlans: async () => {
            return await Plan.find({})
        },
        findAllComments: async () => {
            return await Comment.find({})
        },

    },

    Mutation: {
        findUserById: async (parent, args) => {
            return await User.findById(args.id)
        },
        createNewUser: async (parent, { username, email, password }) => {
            return await User.create({ username, email, password })
        },
        updateUsername: async (parent, args) => {
            return await User.findOneAndUpdate({ _id: args.id }, { username: args.username }, { new: true })
        },
        updateUserEmail: async (parent, args) => {
            return await User.findOneAndUpdate({ _id: args.id }, { email: args.email }, { new: true })
        },
        updateUserPassword: async (parent, args) => {
            return await User.findOneAndUpdate({ _id: args.id }, { password: args.password }, { new: true })
        },
        deleteUserById: async (parent, args) => {
            return await User.findByIdAndDelete(args.id)
        },


        //      USER QUERY
        // finds all the cliques the user is the author of
        findUserCreatedCliques: async (parent, args) => {
            return await Clique.find({ clique_author: args.id })
        },
        // finds all the cliques the user is a member of
        findUserCliqueMemberOf: async (parent, args) => {
            return await Clique.find({ clique_members: args.id })
        },
        // finds all the events the user is the author of
        findUserCreatedEvents: async (parent, args) => {
            return await Event.find({ event_author: args.id })
        },

        // finds all the plans the user is the author of
        findUserCreatedPlans: async (parent, args) => {
            return await Plan.find({ plan_author: args.id })
        },

        // finds all the comments the user is the author of
        findUserCreatedComments: async (parent, args) => {
            return await Comment.find({ comment_author: args.id })
        },


        //              CLIQUES

        // create new clique
        createNewClique: async (parent, { clique_author, clique_name, clique_about }) => {
            return await Clique.create({ clique_author, clique_name, clique_about })
        },
        // find clique by id
        findCliqueById: async (parent, args) => {
            return await Clique.findById(args.id)
        },
        // add member to clique
        addCliqueMember: async (parent, { id, newUser }) => {
            return await Clique.findByIdAndUpdate({ _id: id }, { $push: { clique_members: newUser } })
        },

        // remove member to clique
        removeCliqueMember: async (parent, { id, targetUser }) => {
            return await Clique.findByIdAndUpdate({ _id: id }, { $pull: { clique_members: targetUser } })
        },

        // update the name of the clique by id
        updateCliqueName: async (parent, args) => {
            return await Clique.findOneAndUpdate({ _id: args.id }, { clique_name: args.cliqueName }, { new: true })
        },
        // update the about of the clique by id
        updateCliqueAbout: async (parent, args) => {
            return await Clique.findOneAndUpdate({ _id: args.id }, { clique_about: args.cliqueAbout }, { new: true })
        },
        // delete clique by id
        deleteCliqueById: async (parent, args) => {
            return await Clique.findByIdAndDelete(args.id)
        },
        // finds all the events under this clique
        findAllCliqueEvents: async (parent, args) => {
            return await Event.find({ parent_clique: args.id }).populate('User')
        },

        //             EVENTS

        // create new event
        createNewEvent: async (parent, { event_author, parent_clique, event_name, event_about }) => {
            return await Event.create({ event_author, parent_clique, event_name, event_about })
        },
        // find event by id
        findEventById: async (parent, args) => {
            return await Event.findById(args.id)
        },
        // update the name of the event by id
        updateEventName: async (parent, args) => {
            return await Event.findOneAndUpdate({ _id: args.id }, { event_name: args.eventName }, { new: true })
        },
        // update the about of the event by id
        updateEventAbout: async (parent, args) => {
            return await Event.findOneAndUpdate({ _id: args.id }, { event_about: args.eventAbout }, { new: true })
        },
        // delete event by id
        deleteEventById: async (parent, { id }) => {
            return await Event.findByIdAndDelete(id)
        },
        // finds all the events under this Clique
        findAllCliqueEvents: async (parent, args) => {
            return await Event.find({ parent_clique: args.id })
        },
        // finds all the comments under this event
        findAllEventComments: async (parent, args) => {
            return await Comment.find({ event_context: args.id })
        },

        //             PLANS

        // create new plan
        createNewPlan: async (parent, { plan_author, parent_event, plan_name, plan_about }) => {
            return await Plan.create({ plan_author, parent_event, plan_name, plan_about })
        },
        // find plan by id
        findPlanById: async (parent, args) => {
            return await Plan.findById(args.id)
        },
        // update the name of the plan by id
        updatePlanName: async (parent, args) => {
            return await Plan.findOneAndUpdate({ _id: args.id }, { plan_name: args.planName }, { new: true })
        },
        // update the about of the plan by id
        updatePlanAbout: async (parent, args) => {
            return await Plan.findOneAndUpdate({ _id: args.id }, { plan_about: args.planAbout }, { new: true })
        },
        // delete plan by id
        deletePlanById: async (parent, args) => {
            return await Plan.findByIdAndDelete(args.id)
        },
        // finds all the comments under this plan
        findAllPlanComments: async (parent, args) => {
            return await Comment.find({ plan_context: args.id })
        },
        // find all in favor of this plan
        findAllUsersInFavor: async (parent, args) => {
            return await plan.find({ id: args.id }, { favored_by })
        },

        //      COMMENTS

        // create new plan comment
        createPlanComment: async (parent, { comment_author, plan_context, comment_body }) => {
            return await Comment.create({ comment_author, plan_context, comment_body })
        },

        // create new plan comment
        createPlanComment: async (parent, { comment_author, plan_context, comment_body }) => {
            return await Comment.create({ comment_author, plan_context, comment_body })
        },

        // create new event comment
        createEventComment: async (parent, { comment_author, event_context, comment_body }) => {
            return await Comment.create({ comment_author, event_context, comment_body })
        },


        // find event comments by passing in event id
        findEventComments: async (parent, args) => {
            return await Comment.find({ event_context: args.id }).populate('Clique')
        },
        // find plan comments by passing in plan id
        findPlanComments: async (parent, args) => {
            return await Comment.find({ plan_context: args.id })
        },
        // find comment by id
        findCommentById: async (parent, args) => {
            return await Comment.findById(args.id)
        },
        // delete comment by id
        deleteCommentById: async (parent, args) => {
            return await Comment.findByIdAndDelete(args.id)
        },

    }



}

module.exports = resolvers