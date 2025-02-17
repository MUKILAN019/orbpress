const express = require('express');
const router = express.Router();
const pool = require('../db');
verifyToken = require('../middlewares/authMiddleware');

//Create a new post
router.post('/post', async (req, res) => {  
    try {
        const { user_id, content } = req.body;

        if (!user_id || !content) {
            return res.status(400).json({ error: "User ID and content are required" });
        }

        const newPost = await pool.query(
            "INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *",
            [user_id, content]
        );

        res.status(201).json({ message: "Post created successfully", data: newPost.rows[0] });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//Get all posts

router.get("/get", verifyToken, async(req,res)=>{
    try {
        const allPosts = await pool.query("SELECT * FROM posts");
        res.status(200).json(allPosts.rows);
        // console.log(allPosts.rows);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//Get a post by user id

router.get("/get/:id", verifyToken, async(req,res)=>{
    try {
        const {id} = req.params;
        const post = await pool.query("SELECT * FROM posts WHERE user_id = $1",[id])
        res.status(200).json(post.rows);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//update the post 

router.put("/update/:id",verifyToken, async(req,res)=>{
    try {
        const {id} = req.params;
        const {content} = req.body;
        const updatePost = await pool.query("UPDATE posts SET content = $1 WHERE id = $2 RETURNING *",
            [content,id])
        res.status(200).json(updatePost.rows[0]);
        
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//delete the post

router.delete("/delete/:id",verifyToken, async(req,res)=>{
    try {
        const {id} = req.params;
        const deletePost = await pool.query("DELETE FROM posts WHERE id=$1",[id]);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;
