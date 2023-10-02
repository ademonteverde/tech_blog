const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Comment } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
        const commentText = req.body.commentText;

        if (!commentText || commentText.trim() === '') {
            return res.status(400).json({ message: 'Comment text cannot be empty' });
        }

        const commentData = await Comment.create({
            username: req.session.username,
            blog_id: req.body.blogId,
            text: commentText,
        });

        res.status(200).json(commentData);
        console.log('post route');
    } catch (err) {
        res.status(400).json(err);
        console.error(err);
    }
});

module.exports = router;
