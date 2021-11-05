const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// localhost
const MONGO_DB_URL = 'mongodb://localhost:27017/to-do-db';
//  Testes
// const MONGO_DB_URL = 'mongodb://mongodb:27017/to-do-db';

const DB_NAME = 'to-do-db';

let db = null;

function connection() {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    });
}

module.exports = connection;
