const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require("../utils/auth");
// GET all blogs for home
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                },
            ],
        });

        const blogs = blogData.map((blog) => {
            const plainBlog = blog.get({ plain: true });

            plainBlog.comments = plainBlog.comments.map((comment) => {
                const date = new Date(comment.datePosted);
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

                return {
                    username: comment.username,
                    text: comment.text,
                    datePosted: formattedDate,
                };
            });

            return plainBlog;
        });

        const commentData = await Comment.findAll({})
        const comments = commentData.map((comment) => {
            const plainComment = comment.get({ plain: true });

            return plainComment;
        });

        res.render('homepage', { blogs, logged_in: req.session.logged_in, comments });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;