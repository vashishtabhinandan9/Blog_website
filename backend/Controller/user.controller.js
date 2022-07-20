const router = require("express").Router();
const User = require("../Models/userModel");
const Post = require("../Models/postModel");
const bcrypt = require("bcryptjs");

//UPDATE
const updateuser= async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {//if paaword is in the body it means password is to be updated then 
      //hassh the new password and store it again
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({data:{
        otherdata:updatedUser
      }});
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
};

//DELETE
const deleteuser= async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });//if we delete a user then also delete all the
        //post by that user 
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
};

//GET USER
const getuserbyid= async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {updateuser,deleteuser,getuserbyid};