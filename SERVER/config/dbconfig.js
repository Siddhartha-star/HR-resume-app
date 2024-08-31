// config/dbConfig.js
module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/yourhr',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
