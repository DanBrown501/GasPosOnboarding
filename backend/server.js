"use strict";

//const app = require("./app");
//const { PORT } = require("./config");

//app.listen(PORT, function () {
   // console.log(`Started on http://localhost:${PORT}`);
//});



const app = require("./app");
const { PORT } = require("./config");
    app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'daniel.brown',
        password: 'CrazyAmbitious501',
        server: 'gaspos-onboarding.database.windows.net',
        database: 'GasPos-OnBoarding'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(PORT, function () {
    console.log(`Started on http://localhost:${PORT}`);
});