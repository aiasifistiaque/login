const express = require('express');
const app = express();
const basic = require('./routes/basic');
const users = require('./routes/users');
const auth = require('./routes/auth');
const me = require('./routes/me');
const connection = require('./connection');
const config = require('config');

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

app.use(express.json());

//routes
app.use('/', basic);
app.use('/api/register', users);
app.use('/api/login', auth);
app.use('/me', me);

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`listening to port ${port}`);
});
