const { Blog } = require('../models');

const blogData =
    [
        {
            "id": 1,
            "user_id": 1,
            "username": "rmarx@gmail.com",
            "text": "Wherever you go, whatever you do",
            "title": "Right Here Waiting",
            "datePosted": "2022-01-19",
        },
        {
            "id": 2,
            "user_id": 1,
            "username": "southborder@yahoo.com",
            "text": "We can really never tell it all, no, no, no",
            "title": "Rainbow",
            "datePosted": "2023-05-23",
        }

    ]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;