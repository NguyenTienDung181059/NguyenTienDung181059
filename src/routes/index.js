const newRoute = require('./news');
const siteRoute = require('./site');
function route(app) {
    app.get('/', siteRoute);

    app.get('/new', newRoute);

    app.get('/search', siteRoute);

    app.get('/new/:slug', newRoute);
}

module.exports = route;
