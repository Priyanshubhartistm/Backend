const express = require('express')
const router = express.Router()

// 1. authentication checked middleware
const auth = function (req, res, next) {
  console.log("I am inside auth wala middleware");
  

  // for your help i create a dummy user addEventListener

  req.user = {userId: 1, name: "John Doe"}

  if(req.user){
    // if a valid user is there in req, then proceed to next middleware
    next()
  } else {
    
    // if not a valid user
    res.json({
      success: false,
      message: "User not authenticated"
    })
}
}

// 2. checked role of user student or not
const isStudent = function (req, res, next) {
  console.log("I am inside isStudent wala middleware");

  if(req.user.role === 'student'){
    next()
  } else {
    res.json({
      success: false,
      message: "User is not a student"
    })
  }

}

// 3. checked role of user admin or not

const isAdmin = function (req, res, next) {
  console.log("I am inside  is admin wala");

  if(req.user.role === 'admin'){
    next()
  }
  else {
    res.json({
      success: false,
      message: "User is not an admin"
    })
  }
  
}

// routes

router.get("/student", auth, isStudent,(req, res)=> {
  console.log("I AM INSIDE STUDENT route");
  res.send("student specific data");
  
})

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I AM INSIDE ADMIN route");
  res.send("admin specific data");
})

module.exports = router