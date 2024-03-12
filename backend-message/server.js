const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = ['first', 'second', 'third'];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    let msg =req.body
    console.log(req.body);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
});

app.listen(port, () => console.log('running'));

