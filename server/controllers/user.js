const User = require('../models/User')

// ref lecture 213
// right side is from the actions of the req left side is from schema
exports.postUser = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email
    const password = req.body.password
    const user = new User({
        username: username,
        email: email,
        password: password
    });
    user.save()
        .then(result => {
            console.log("User created")
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findAllUser = (req, res, next) => {
    User.find()
        .then(result => {
            console.log("User found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findByIdUser = (req, res, next) => {
    const user_id = req.body.user_id;
    User.findById(user_id)
        .then(result => {
            console.log("User found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}


exports.editUser = (req, res, next) => {
    const user_id = req.body.user_id;
    const update_username = req.body.username;
    const update_email = req.body.email;
    const update_password = req.body.password;
    User.findById(user_id).then(user => {
        user.username = update_username
        user.email = update_email
        user.password = update_password
        return user.save()
    }).then(result => {
        console.log("User edited " + result)
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteUser = (req, res, next) => {
    const user_id = req.body.user_id;
    User.findByIdAndRemove(user_id)
        .then(result => {
            console.log("User deleted" + result)
        })
        .catch(err => {
            console.log(err)
        })
}
