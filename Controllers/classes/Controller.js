class Controller{
    constructor(service) {
        this.service = service;//inject a service class into the controller class
    }
    index(req, res){
        throw new Error('Override the index function');
    }
}

module.exports = Controller;