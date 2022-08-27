const { processTextMessage } = require('./usecase');



const PORT = 3001;
const PACKAGE_NAME = 'ir.fechagre.smsAPI';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());

app.get('/', (req, res)=> {
	res.send(`Hello from ${PACKAGE_NAME}`);
});

app.post('/webhook', (req, res) => {
	console.log(req.body);
	let message = req.body.message;
	let sender = req.body.sender;
	processTextMessage(sender, message);
	res.send();
})

app.listen(PORT, ()=>{
	console.log(`${PACKAGE_NAME} start on ${PORT}`);
})
