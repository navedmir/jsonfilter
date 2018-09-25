'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    appConfig = require('./config/config'),
    app = express();

app.use(bodyParser.json());
app.use('/', index);


app.use((err, req, res, next) => {
    // body-parser will set this to 400 if the json is in error
    if (err.status === 400)
        return res.status(err.status).send({
            "error": "Could not decode request: JSON parsing failed"
        });

    return next(err);
});

// app server started 
app.listen(process.env.PORT, () => {
    console.log('Server is up and running on port numner ' + process.env.PORT);
});

/**
 * Export the Express app so that it can be used by Chai
 */
module.exports = app;