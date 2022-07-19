const router = require("express").Router();
const User = require("../Models/userModel");
const Post = require("../Models/postModel");

//CREATE POST
const createpost= async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } 
  catch (err) {
    res.status(500).json(err);
  }
};


//UPDATE POST
const updatepost =  async (req, res) => {
  try {  
    const post = await Post.findById(req.params.id);//find the 
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }  
    } else {
      res.status(401).json("You can update only your post!");
    }    
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE POST
const deletepost =  async (req, res) => {
  try {
    
    const post = await Post.findById(req.params.id);
    console.log(post.username)
    if (post.username === req.body.username) {
    
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET POST by id 
const getpostbyid =  async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
        message:"id is not right",
        error:err
    });
  }
};

//GET ALL POSTS
const getallpost = async (req, res) => {
  const username = req.query.user;//if a username is paased as query then gel all post by user
  const catName = req.query.cat;///if a category  is paased as query then gel all post by category
  try {
    let posts;
    if (username){
      posts = await Post.find({ username });
    } else if (catName){
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {createpost,updatepost,deletepost,getallpost,getpostbyid};