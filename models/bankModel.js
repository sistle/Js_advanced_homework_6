
const request = require('request');
const _EXTERNAL_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';




exports.getApi =  (callback)=> {
	
		request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
			if (err) {
				return callback(err)
			}
			
			return callback(body)
		})
	
}

