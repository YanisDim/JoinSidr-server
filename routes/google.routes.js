const router = require("express").Router();
const UserModel = require('../models/User.model')

// The client makes a API request to this url sending the data in the body
router.post("/google/info", (req, res, next) => {
  const {firstName, lastName, email, image, googleId} = req.body
  // the name itself will include the last name
  try {
    UserModel.find({email:email})
    .then((result) => {
      if(result.length == 0 ){
        // Create the user in the DB
    UserModel.create({firstName, lastName, googleId, profilePic:image, email})
    .then((response) => {
      // Save the loggedInInfo in the session
      // We'll stick to using sessions just to not over complicate the students with tokens and cookies
      req.session.loggedInUser = response
      res.status(200).json({data: response})
    })
      }else{
        req.session.loggedInUser = result[0]
        res.status(200).json({data: result[0]})
      }
    }).catch((err) => {
      console.log(err)
    });
    
  }
  catch(error) {
    res.status(500).json({error: `${error}`})
  }
});

module.exports = router;