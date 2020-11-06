require ('dotenv').config()
const massive = require('massive');
const express = require('express');
const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env


app.use(express.json);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('DB is connected')
}).catch(err => console.log(err))



app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`))