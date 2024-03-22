class PostsController {
    getPosts(req, res) {
        const usersPosts = {
            "1": "Post 1",
            "2": "Post 2",
            "3": "Post 3",
        };
        res.send(usersPosts);
    }
}

module.exports = new PostsController();
