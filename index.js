const core = require('./Core');
const database = new core.Database();
const server = new core.Server();
async function run() {
    await database.connect();
    server.start();
}

module.exports = run();