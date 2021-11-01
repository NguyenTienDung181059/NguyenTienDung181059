const Test = require('../models/TestDB');
const { mongoToObj } = require('../../util/mongoose');

class WebDemoController {
   show(req, res,next) {
        Test.findOne({slug: req.params.slug})
        .then(webdata=>{
            res.render('webdemo/show',{webdata: mongoToObj(webdata)});
        })
        .catch(next);
    }

    create(req, res,next) {
    res.render('webdemo/create');
    }

    store(req, res,next) {
        const formData = req.body;
        const newForm = new Test(formData);
        newForm.save()
        .then(()=> res.redirect('/'))
        .catch(error=>{

        });
    }
}

module.exports = new WebDemoController();
