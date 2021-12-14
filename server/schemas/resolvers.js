// const { Clique, Comment, Event, Plan, User } = require('../models/index')
const { User } = require('../models/index')

const resolvers = {
    Query: {
        findAllUsers: async () => {
            return await User.find({})
        },

    },

    Mutation: {
        findUserById: async (parent, args) => {
            return await User.findById(args.id)
        },
        updateUsername: async (parent, args) => {
            return await User.updateOne({ _id: args.id }, { username: args.username }, { new: true })
        },
        updateUserEmail: async (parent, args) => {
            return await User.updateOne({ _id: args.id }, { email: args.email }, { new: true })
        },
        updateUserPassword: async (parent, args) => {
            return await User.updateOne({ _id: args.id }, { password: args.password }, { new: true })
        },
        findUserById: async (parent, args) => {
            return await User.findOneAndDelete(args.id)
        },
    }

}

module.exports = resolvers