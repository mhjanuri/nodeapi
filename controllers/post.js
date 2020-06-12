const Post = require('../models/post')

exports.getPosts = (req, res) => {
    res.json({
        posts: [{ title: "first post" }, { title: "second post" }]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("CREATING POST: ", req.body);

    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err.message
    //         });
    //     }
    //     res.status(200).json({
    //         post: result
    //     });
    // });
    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    });
};
