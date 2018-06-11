const express     = require('express');
const router      = express.Router();
const passport    = require('passport');
const User        = require("../models/user");
const flash       = require("connect-flash");
const ensureLogin = require("connect-ensure-login");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;


router.post('/signup', (req, res, next) => {
  if (req.body.username === '' || req.body.password === '' || req.body.email === '' ||
  req.body.firstname === '' || req.body.lastname === '' || req.body.phone === '' ||
  req.body.dob === '' || req.body.address === '' || req.body.membership === '') {
    res.status(400).json({ message: "Please fill information"})
  }
  User.findOne({ username: req.body.username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "Sorry, that username already exists" });
      return;
    }
   
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(req.body.password, salt);
    
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      membership: req.body.membership,
      username: req.body.username,
      password: hashPass,
    })
    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
        return;
      }
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }
        res.status(200).json(req.user);
      });
    });
  });
});


// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, theUser, failureDetails) => {
//     // console.log(`the user---> ${theUser}`)
//     if (err) {
//       res.status(500).json({ message: 'Something went wrong' });
//       return;
//     }

//     if (!theUser) {
//       res.status(401).json(failureDetails);
//       return;
//     }

//     req.login(theUser, (err) => {
//       if (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//         return;
//       }

//       // We are now logged in (notice req.user)
//       res.status(200).json(req.user);
//     });
//   })(req, res, next);
// });

router.post('/login', (req, res, next) => {
  // console.log("post login: ", req.body)
  User.findOne({ username: req.body.username })
  .then((userFromDb) => {
    // console.log("user from db =====>>>>>======>>>>>=====>>>>>>", userFromDb)
    if (userFromDb === null) {
      res.status(400).json({ message: "That email is invalid. Try again." });
      return;
    }
    const isPasswordGood = bcrypt.compareSync(req.body.password, userFromDb.password);

    // console.log(userFromDb);

    if (isPasswordGood === false) {
      res.status(400).json({ message: "That password is invalid. Try again." });
      return;
    }
    req.login(userFromDb, (err) => {
      // clear the "encryptedPassword" before sending the user userInfo// (otherwise it's a security risk)
      userFromDb.password = undefined;
// console.log("do i have user here: ", userFromDb)
          console.log(userFromDb)
          res.status(200).json(
          // isLoggedIn: true,
          // userInfo: userFromDb
          userFromDb
        );
    });
  })
  .catch((err) => {
    console.log("POST/login ERROR!");
    console.log(err);

    res.status(500).json({ error: "Log in database error" });
  });
});  // Post LogIn


router.get('/loggedin', (req, res, next) => {
  console.log("user in the user route backend: ", req.user)
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.json(null);
});

router.post("/logout", (req, res) => {
  req.logOut();
  // req.session.destroy();

  console.log("this is req session", req.user);
  // res.redirect("/login");
  res.status(200).json({ message: 'Success' });
});



module.exports = router;
