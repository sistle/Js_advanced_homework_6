// const express = require('express');
// const urlencodedParser = express.urlencoded({ extended: false });
const bankController = require('../controllers/bankController');

module.exports = bank => {
	bank.post('/',bankController.getMoney)
	bank.get('/', bankController.getApi);


}

