const bank = require('../models/bankModel.js');
const request = require('request');

let safe = '';
let dollat;
exports.getApi = function (req, res) {
	bank.getApi(function (docs) {
		// res.send(JSON.stringify(docs))
		safe = (docs);
		// res.send(safe);
		res.render('main', { safe: safe });
	})
}

exports.getMoney = function (req, res) {

	a = req.body.data;
	res.render('answer',{safe:safe,a:a})

}
