const { Schema, model } = require("mongoose");
require("../models/User.model")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const projectSchema = new Schema({
    title: {
      type: String,
       required: true
      },
    type: {
      type: String,
      required: true
      },
    description: {
      type: String,
      required: true
    },
    date: Date,
    image: {
      type: String
    },
    like: {
      type: Schema.Types.ObjectId,
      ref:"User",
    },
    superlike: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref:"User",
    },
    urlProject: {
      type: String
    },
    urlGit: {
      type: String
    },
    languages: [String],
  
});

const Project = model("Project", projectSchema);

module.exports = Project;
