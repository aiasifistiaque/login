const mongoose = require('mongoose');

function connect() {
  const connectionString =
    'mongodb+srv://asifistiauqe:01828398225@cluster0.gwe2l.mongodb.net/<dbname>?retryWrites=true&w=majority';
  mongoose
    .connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log('connection to database successful'))
    .catch(err => console.error(err));
}
connect();

module.exports = connect;
