var zone = require('../models/zone')

module.exports = {
	find: function(params, callback) {
		zone.find(params, function(err, zones) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null,zones);
		});
	},
	
	findById: function(id, callback) {
			zone.findById(id, function(err, zones) {
				if(err) {
					callback(err, null);
					return;
				}
				callback(null, zones);
			});
	},

	update: function(id, params, callback) {
		zone.findByIdAndUpdate(id, params, {new:true}, function(err,zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zones);
		})
	},

	create: function(params, callback) {
		var zips = params['zipcodes'];
		var zip = zips.split(',');
		params['zipcodes'] = zip;

		zone.create(params, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	},

	destroy: function(id, callback) {
		zone.findByIdandRemove(id, function(err) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, null);	
		})	
	}
}