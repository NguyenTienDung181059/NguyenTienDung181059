const Test = require('../models/TestDB');
const { multipleMongoObj } = require('../../util/mongoose');

class MeController {
    showmyform(req, res) {
        res.render('me/show-myform');
    }
}
module.exports = new MeController();

