const Sequelize = require("sequelize");
require("dotenv").config();

let db;

if (process.env.JAWSDB_URL) {
    // Use the JawsDB URL for Heroku
    db = new Sequelize(process.env.JAWSDB_URL, {
        dialect: "mysql"
    });
} else {
    // Use local configuration for MySQL
    db = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
}

module.exports = db;
