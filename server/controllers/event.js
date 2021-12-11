const Event = require('../models/Event')

// ref lecture 213
// right side is from the actions of the req left side is from schema
exports.postEvent = (req, res, next) => {
    const userId = req.body.userId
    const event_name = req.body.event_name;
    const event_about = req.body.event_about;
    const event = new Event({
        event_author: userId,
        event_name: event_name,
        event_about: event_about,
    });
    event.save()
        .then(result => {
            console.log("Event created")
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findAllEvent = (req, res, next) => {
    Event.find()
        .then(result => {
            console.log("Event found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findByIdEvent = (req, res, next) => {
    const event_id = req.body.event_id;
    Event.findById(event_id)
        .then(result => {
            console.log("Event found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}


exports.editEvent = (req, res, next) => {
    const event_id = req.body.event_id;
    const update_name = req.body.event_name;
    const update_about = req.body.event_about;
    Event.findById(event_id).then(event => {
        event.event_name = update_name
        event.event_about = update_about
        return event.save()
    }).then(result => {
        console.log("Event edited " + result)
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteEvent = (req, res, next) => {
    const event_id = req.body.event_id;
    Event.findByIdAndRemove(event_id)
        .then(result => {
            console.log("Event deleted" + result)
        })
        .catch(err => {
            console.log(err)
        })
}
