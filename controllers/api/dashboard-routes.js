const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDate(date) {
    const dateObj = new Date(date);
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = dateObj.getDate().toString().padStart(2, '0');
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
}

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((blog) => {
            const plainBlog = blog.get({ plain: true });
            plainBlog.datePosted = formatDate(plainBlog.datePosted);
            
            return plainBlog;
        });

        res.render('dashboard', { blogs, logged_in: req.session.logged_in, username: capitalizeFirstLetter(req.session.username) });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogData = await Blog.create({
            user_id: req.session.user_id,
            username: req.session.username,
            text: req.body.text,
            title: req.body.title,
            datePosted: new Date(),
        });

        newBlogData.datePosted = formatDate(newBlogData.datePosted);

        res.status(201).json(newBlogData); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        await Blog.update(
            {
                text: req.body.text,
                title: req.body.title
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error'); // Handle errors appropriately, this is just an example
    }
});

router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => res.json(err));
});

module.exports = router;
