const Controller = require('./Controller');

class HomeController extends Controller{
    constructor() {
        super();
    }

    index(req, res){
        res.render('index');
    }
}

module.exports = HomeController;