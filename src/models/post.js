const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title : String,
    userId : String,
    description : String
    
})

const Post = mongoose.model('post', postSchema)

module.exports = Post;