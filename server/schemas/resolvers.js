const { Clique, Comment, Event, Plan, User } = require('../models/index')
const { AuthenticationError } = require("apollo-server-express")
const { signToken } = require('../utils/auth')

// run thisUser and make it work

const resolvers = {
    Query: {
        /*---------------------------------------------------USER QUERY-------------------------------------------------*/
        thisUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
        },
        findAllUsers: async () => {
            return await User.find({})
        },
        findUserById: async (parent, args) => {
            return await User.findById(args.id)
        },
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

        /*---------------------------------------------- CLIQUE QUERY ---------------------------------------------------------*/
        findAllCliques: async () => {
            return await Clique.find({})
        },
        // find clique by id
        findCliqueById: async (parent, args) => {
            return await Clique.findById(args.id)
        },
        // narrow serach by author and clique name
        findCliqueByNarrow: async (parent, args) => {
            return await Clique.find({ clique_author: args.author_id, clique_name: args.clique_name })
        },


        /*-------------------------------------------------- EVENT QUERY ------------------------------------------------*/
        findAllEvents: async () => {
            return await Event.find({})
        },
        // find event by id
        findEventById: async (parent, args) => {
            return await Event.findById(args.id)
        },
        // finds all the events under this Clique
        findAllCliqueEvents: async (parent, args) => {
            return await Event.find({ parent_clique: args.id })
        },


        /*----------------------------------------------------- PLAN QUERY -------------------------------------------------*/
        findAllPlans: async () => {
            return await Plan.find({})
        },
        // find plan by id
        findPlanById: async (parent, args) => {
            return await Plan.findById(args.id)
        },
        // finds all the comments under this event
        findAllEventPlans: async (parent, args) => {
            return await Plan.find({ parent_event: args.id })
        },


        /*----------------------------------------------------- COMMENT QUERY ----------------------------------------------*/
        findAllComments: async () => {
            return await Comment.find({})
        },
        // find comment by id
        findCommentById: async (parent, args) => {
            return await Comment.findById(args.id)
        },
        // find event comments by passing in event id
        findEventComments: async (parent, args) => {
            return await Comment.find({ event_context: args.id })
        },
        // find plan comments by passing in plan id
        findPlanComments: async (parent, args) => {
            return await Comment.find({ plan_context: args.id })
        },

    },

    Mutation: {
        /*-------------------------------------------------- USER MUTATION ----------------------------------------------*/


        createNewUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        userLogin: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
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

        /*----------------------------------------------------- CLIQUE MUTATION ------------------------------------------------*/

        // create new clique
        createNewClique: async (parent, { clique_author, clique_name, clique_about }) => {
            return await Clique.create({ clique_author, clique_name, clique_about })
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

        /*-------------------------------------------------------------- EVENT MUTATION ---------------------------------------*/

        // create new event
        createNewEvent: async (parent, { event_author, parent_clique, event_name, event_about }) => {
            return await Event.create({ event_author, parent_clique, event_name, event_about })
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

        /*--------------------------------------------------------------------- PLAN MUTATION ------------------------------------------------*/

        // create new plan
        createNewPlan: async (parent, { plan_author, parent_event, plan_name, plan_about }) => {
            return await Plan.create({ plan_author, parent_event, plan_name, plan_about })
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

        /*----------------------------------------------------------------- COMMENT MUTATION ------------------------------------*/
        // create new event comment
        createEventComment: async (parent, { comment_author, event_context, comment_body }) => {
            return await Comment.create({ comment_author, event_context, comment_body })
        },
        // create new plan comment
        createPlanComment: async (parent, { comment_author, plan_context, comment_body }) => {
            return await Comment.create({ comment_author, plan_context, comment_body })
        },
        // delete comment by id
        deleteCommentById: async (parent, args) => {
            return await Comment.findByIdAndDelete(args.id)
        },

    }



}

module.exports = resolvers
