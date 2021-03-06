const express = require('express');
const morgan = require('morgan');
var exphbs = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/DB');

const app = express();
const port = 3000;
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP
app.use(morgan('combined'));

//TEMPLATE
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\resources\\views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
