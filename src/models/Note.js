// Steps:
// 1. Define Schema(details of model) -> Node : id, userid, title, content, dateadded
// 2. Create Model -> <model name> <schema> Note

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateadded: {
        type: Date,
        default: Date.now,
    }
});

// creating the model
// here module.exports is used to export the model 
// and then it can be imported and can be used.
module.exports = mongoose.model("Note", noteSchema);