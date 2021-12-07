const { Clique, Comment, Event, Plan, User } = require('../models');

const resolvers = {
    Query: {
        cliques: async () => {
            return Clique.find().sort({createdAt: -1});
        }
    },

    Mutation: {
        addClique: async (parent, { cliqueAuthor, cliqueName, cliqueMembers, cliqueAbout }) => {
            return Clique.create({ cliqueAuthor, cliqueName, cliqueMembers, cliqueAbout })
        }
    },
};

module.exports = resolvers;