const mongoose = require('mongoose');
class Database{
    constructor() {
        this.conn = null;
    }
    async connect(){
        this.conn = mongoose.connect('mongodb://localhost/logistics',
            {useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex:true});
    }
}

module.exports = Database;