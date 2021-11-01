const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _slug = require('mongoose-slug-generator');

mongoose.plugin(_slug);

const Test = new Schema({
    name: { type: String, maxlength: 255 },
    detail: { type: String, maxlength: 255 },
    price: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },   
    slug: { type: String, slug: 'name' , unique: true},

},{
    timestamps:true
});

module.exports = mongoose.model('demowebdatas', Test);
