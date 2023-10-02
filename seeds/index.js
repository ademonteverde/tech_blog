const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');

const seedBlogs = require('./blogData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlogs();
    await seedComments();

    process.exit(0);
};

seedAll();