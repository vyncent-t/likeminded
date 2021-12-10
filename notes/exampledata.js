// the collection is the static - the schema is for the user interactables
// collections: $users, $cliques, $events - plans

let user = {
    "user": "username",
    "first_name": "name",
    "email": "email@email.com",
    "password": "password",
    "cliques": [{ "clique_id": 123 }, { "clique_id": 123 }, { "clique_id": 123 }],
    "pending": [
        {
            "pending_clique": { "clique_id": 123 },
            "clique_approve": false
        },
        {
            "pending_clique": { "clique_id": 123 },
            "clique_approve": false
        },
        {
            "pending_clique": { "clique_id": 123 },
            "clique_approve": false
        },
    ],
}
let clique = {
    "clique_author": { "user_id": 123 },
    "clique_name": "family",
    "clique_body": "this is the family chat",
    "clique_admin": [{ "user_id": 123 }, { "user_id": 123 }, { "user_id": 123 }],
    "clique_members": [{ "user_id": 123 }, { "user_id": 123 }, { "user_id": 123 }],
    "pending_members": [{ "user_id": 123 }, { "user_id": 123 }, { "user_id": 123 }],
    "clique_events": [{ "event_id": 123 }, { "event_id": 123 }, { "event_id": 123 }]
}


let event = {
    "event_name": "mom's birthday",
    "event_body": "this is where we are going to plan for mom's birthday",
    "event_author": { "user_id": 123 },
    "event_plans": [{ "plan_id": 123 }, { "plan_id": 123 }, { "plan_id": 123 }],
    "endorced_plans": [{ "plan_id": 123 }, { "plan_id": 123 }, { "plan_id": 123 }],
    "best_plan": { "plan_id": 123 },
    "votes_to_win": 7
}

let plan = {
    "plan_event": { "event_id": 123 },
    "plan_name": "mom birthday dinner",
    "plan_author": { "user_id": 123 },
    "plan_date": "October 5th 2021",
    "plan_body": "body of text about the plan",
    "plan_likes": 10,
    "plan_likedby": [{ "user_id": 123 }, { "user_id": 123 }, { "user_id": 123 }],
    "plan_endorsements": 10,
    "plan_endorsedby": [{ "user_id": 123 }, { "user_id": 123 }, { "user_id": 123 }],
    "is_best": false,
    "plan_comments": [
        {
            "comment_id": "commentA",
            "comment_body": "this is a comment under a plan",
            "comment_author": { "user_id": 123 }
        },
        {
            "comment_id": "commentB",
            "comment_body": "this is a comment under a plan",
            "comment_author": { "user_id": 123 }
        },
        {
            "comment_id": "commentC",
            "comment_body": "this is a comment under a plan",
            "comment_author": { "user_id": 123 }
        }
    ]
}

