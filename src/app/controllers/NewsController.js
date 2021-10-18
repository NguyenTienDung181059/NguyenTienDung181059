class NewsController {
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('New URL');
    }
}
module.exports = new NewsController();

const newsController = require('./NewsController');
