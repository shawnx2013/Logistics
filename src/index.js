const core = require('./core');

const server = new core.Server();

async function run(){
    server.start();
}

module.exports = run();