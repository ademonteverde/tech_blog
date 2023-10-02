const { User } = require('../models');

const userData =
    [
        {
            "id": 1,
            "username": "Richard",
            "email": "rmarx@gmail.com",
            "password": "righthere123"
        },
        {
            "id": 2,
            "username": "Rainbow",
            "email": "southborder@yahoo.com",
            "password": "nightday123"
        }

    ]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;