//"use strict";

/** Database setup for jobly. */

const { Client } = require("mssql");
const { getDatabaseUri } = require("./config");

const db = new Client({
    connectionString: getDatabaseUri(),
});

db.connect();

module.exports = db;

//const sql = require('mssql')
//const sqlConfig = {
    //user: 'daniel.brown',
   // password: 'CrazyAmbitious501',
   // database: 'GasPos-OnBoarding',
    //server: 'gaspos-onboarding.database.windows.net',
    //pool: {
      //  max: 10,
      //  min: 0,
      //  idleTimeoutMillis: 30000
   // },
   // options: {
      //  encrypt: true, // for azure
       // trustServerCertificate: false // change to true for local dev / self-signed certs
   //}
//}

//async () => {
    //try {
        // make sure that any items are correctly URL encoded in the connection string
      //  await sql.connect(sqlConfig)
      //  const result = await sql.query`select * from mytable where id = ${value}`
       // console.dir(result)
  //  } catch (err) {
        // ... error checks
  //  }
//}