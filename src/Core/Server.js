const express = require('express');
const routes = require('../configs/routes');
class Server {
    constructor(database) {
        this.database = database;
        this.router = express.Router()
    }

    start(){
        this.init();
    }

    init(){
        this.initControllers();
    }

    initControllers(){
        const homeController = new controllers.homeController();
        this.setRoutes(homeController, routes.HOME);
    }

    setRoutes(controller, routes){
        routes.forEach((route) =>{
            /*
            * router.METHOD(path, [callback, ...] callback)
            * The router.METHOD() methods provide the routing functionality in Express,
            *  where METHOD is one of the HTTP methods, such as GET, PUT, POST, and so on,
            * in lowercase. Thus, the actual methods are router.get(), router.post(), router.put(), and so on.
            * i.e.  this.router['get']('/', homecontroller['index'].bind(homecontroller)
            *       called from
            *       register("ctrl", "HOME", homeController)
            * */
            this.router[route.method](route.path, controller[route.endpoint].bind(controller));
        })
    }
}
module.exports = Server;