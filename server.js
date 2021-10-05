const express = require('express');
const app = express();
const request = require('request');



const bankController = require('./controllers/bankController.js');
const bankModel = require('./models/bankModel.js');

const PORT = process.env.PORT || 3004;

app.set('view engine', 'ejs');
app.use('/public',express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.post('/', function (request,response) {
// 	console.log(request.body);
	
// })


require("./routes/bankRoutes")(app);



app.listen(PORT, () => {
	console.log('Server is running in port '+PORT);
})