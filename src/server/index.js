const express = require('express');
const os = require('os');

const app = express();

const data = {
  firstName: 'Lee',
  lastName: 'Marsden',
}

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send(data));

app.listen(8080, () => console.log('Listening on port 8080!'));

// { username: os.userInfo().username }