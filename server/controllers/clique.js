const Clique = require('../models/Clique')

// ref lecture 213
// right side is from the actions of the req left side is from schema
exports.postClique = (req, res, next) => {
    const clique_name = req.body.clique_name;
    const clique_about = req.body.clique_about;
    const clique = new Clique({
        clique_name: clique_name,
        clique_about: clique_about,
    });
    clique.save()
        .then(result => {
            console.log("Clique created")
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findAllClique = (req, res, next) => {
    Clique.find()
        .then(result => {
            console.log("Clique found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findClique = (req, res, next) => {
    const clique_id = req.body.clique_id;
    Clique.findById(clique_id)
        .then(result => {
            console.log("Clique found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}