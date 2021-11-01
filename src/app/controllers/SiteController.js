const Test = require('../models/TestDB');
const { multipleMongoObj } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Test.find({})
            .then(webdata => { 
            res.render('home', { webdata: multipleMongoObj(webdata) });
        })
            .catch((error) => next(error));
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();

