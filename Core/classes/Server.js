const express = require('express');
const passport = require('passport-local');
const routes = require('../../configs/routes');
const controllers = require('../../Controllers');
class Server {
    constructor() {
        //this.database = database;
        this.router = express.Router();
        this.expressInstance = express();
    }

    start(){
        this.init();
        this.expressInstance.listen(3000, ()=>{
            console.log('Server started on port 3000');
            console.log('http://localhost:3000');
            }
        )
    }

    init(){
        this.expressInstance.use(this.router);
        //this.expressInstance.use(passport);
        this.expressInstance.use(express.static('./Views'));
        this.expressInstance.set('view engine', 'ejs');
        this.expressInstance.set('views', './Views');
        this.initControllers();
    }

    initControllers(){
        const homeController = new controllers.HomeController();
        this.setRoutes(homeController, routes.HOME);
    }

    setRoutes(controller, routes){
        routes.forEach((route) =>{
            this.router[route.method](route.path, controller[route.endpoint].bind(controller));
        });
    }

}
module.exports = Server;