const newRoute = require('./news');
const webdemoRoute = require('./webdemo');
const siteRoute = require('./site');
const meRoute = require('./me');
function route(app) {
    app.use('/', siteRoute);

    app.use('/new', newRoute);

    app.use('/search', siteRoute);

    app.use('/webdemo', webdemoRoute);

    app.use('/me', meRoute);


}

module.exports = route;
