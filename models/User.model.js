const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({

    username: {type: String},
    firstName: String,
	  lastName: String,
    email: {type: String, required: true, unique: true},
    password: {type: String,},
    googleId: String,
    linkedInId: String,
    userType: {type: String, enum:["Recruiter", "Workfluencer"]},
    description: String,
    profilePic: {type: String, default: "/images/profileIcon.png",},
    country: String,
    experience: {type: String, enum:["student", "Junior 0-2 years of experience", "Senior 2+ years" ]},
    available: String,
    workLocation: {type:String},
    linkedinUrl: String,
    githubUrl: String,
    skills:[String],
    follow: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
});

const User = model("User", userSchema);

module.exports = User;
