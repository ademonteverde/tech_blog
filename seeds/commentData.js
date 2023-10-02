const { Comment } = require('../models');

const commentData = [
  {
    "id": 1,
    "username": "Richard",
    "blog_id": 1,
    "text": "Oceans apart, day after day",
    "datePosted": "2022-02-01", // Include the datePosted attribute
  },
  {
    "id": 2,
    "username": "Rainbow",
    "blog_id": 2,
    "text": "There's a rainbow always after the rain",
    "datePosted": "2023-07-12", // Include the datePosted attribute
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
