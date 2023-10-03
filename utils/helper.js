const Handlebars = require('handlebars');

// Create a helper function to format the date
Handlebars.registerHelper('formatDate', function(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  });
  