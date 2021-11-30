//"use strict";

/** Database setup for jobly. */

//const { Client } = require("sql");
//const { getDatabaseUri } = require("./config");

//const db = new Client({
 //   connectionString: getDatabaseUri(),
//});

//db.connect();

//module.exports = db;

const mysql = require('mysql');

var config =
{
    host: 'gaspos-onboarding.database.windows.net',
    user: 'daniel.brown',
    password: 'CrazyAmbitious501',
    database: 'gaspos-onboarding',
    port: 3001,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            queryDatabase();
        }
    });