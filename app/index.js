var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api/index');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use('/', api);

app.use(function(err, req, res, next) {
    if(err) {
        console.error(err.name + err.message);
        res.status(500).send(err.message);
    } else {
        next(res, res);
    }
})

const server = app.listen(port, function () {
    console.log('Server running on port ' + server.address().port);
});
