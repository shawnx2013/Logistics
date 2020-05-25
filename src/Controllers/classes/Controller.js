class Controller{
    index(req, res){
        throw new Error('Override the index function');
    }
}

module.exports = Controller;