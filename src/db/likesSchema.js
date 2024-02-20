// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email_id: String,
    date: { type: Date, default: Date.now },
})

const likesSchema = new Schema({
    total_count: Number,
    users: [usersSchema],
});

const usersModel = mongoose.model("usersModel", usersSchema);
const likesModel = mongoose.model("likesModel", likesSchema);