import "dotenv/config"; 
import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { initRouters } from "./routes"
import * as cors from "cors"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())

    initRouters(app);

    // start express server
    app.listen(3000)


    console.log("Express server has started on port 3000. Open http://localhost:3000/api to see results")

}).catch(error => console.log(error))
