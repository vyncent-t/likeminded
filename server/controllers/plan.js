const Plan = require('../models/Plan')

// ref lecture 213
// right side is from the actions of the req left side is from schema
exports.postPlan = (req, res, next) => {
    const userId = req.body.userId
    const eventId = req.body.eventId;
    const plan_name = req.body.plan_name;
    const plan_about = req.body.plan_about;
    const plan = new Plan({
        plan_author: userId,
        parent_event: eventId,
        plan_name: plan_name,
        plan_about: plan_about,
    });
    plan.save()
        .then(result => {
            console.log("Plan created")
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findAllPlan = (req, res, next) => {
    Plan.find()
        .then(result => {
            console.log("Plan found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.findByIdPlan = (req, res, next) => {
    const plan_id = req.body.plan_id;
    Plan.findById(plan_id)
        .then(result => {
            console.log("Plan found" + result)
        })
        .catch(err => {
            console.log(err)
        })
}


exports.editPlan = (req, res, next) => {
    const plan_id = req.body.plan_id;
    const update_name = req.body.plan_name;
    const update_about = req.body.plan_about;
    Plan.findById(plan_id).then(plan => {
        plan.plan_name = update_name
        plan.plan_about = update_about
        return plan.save()
    }).then(result => {
        console.log("Plan edited " + result)
    }).catch(err => {
        console.log(err)
    })
}

exports.deletePlan = (req, res, next) => {
    const plan_id = req.body.plan_id;
    Plan.findByIdAndRemove(plan_id)
        .then(result => {
            console.log("Plan deleted" + result)
        })
        .catch(err => {
            console.log(err)
        })
}
