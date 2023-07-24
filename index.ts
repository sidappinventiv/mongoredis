const express = require('express');
require('dotenv').config()
const app = express();
// import {usermodule} from './models/user';
import { router } from './routes/user_route';
import {dbconn} from './database_conn';
// import swaggerJSdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')


const options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'API FOR MONGODB',
            version:'1.0.0'
        },
        servers:[
            {
                url : 'http://localhost:3000/'
            }
        ]
    },
    apis:['./routes/user_route.ts']
}



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",router)

dbconn();

app.listen(process.env.PORT, async()=>{
    // dbconn();


    console.log(`server listing on ${process.env.PORT}`);

})
const swaggerspec= swaggerJSdoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerspec))