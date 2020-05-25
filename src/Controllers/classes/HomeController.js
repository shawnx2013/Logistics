const Controller = require('./Controller');

class HomeController extends Controller{
    constructor() {
        super();
    }

    async index(req, res){
        res.render('index');
    }
}

module.exports = HomeController;