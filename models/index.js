const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')

Blog.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Blog, { foreignKey: 'user_id' })
Blog.hasMany(Comment, { foreignKey: 'blog_id' });
Comment.belongsTo(Blog, { foreignKey: 'blog_id' });

module.exports = { Blog, User, Comment };