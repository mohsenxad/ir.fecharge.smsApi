const PORT = 3001;
const PACKAGE_NAME = 'ir.fechagre.smsAPI';

express = require('express');
app = express();

app.get('/', (req, res)=> {
	res.send(`Hello from ${PACKAGE_NAME}`);
});

app.listen(PORT, ()=>{
	console.log(`${PACKAGE_NAME} start on ${PORT}`);
})
