var commentCon = require('../models/comment')

module.exports = {
	find: function(params, callback) {
		commentCon.find(params, function(err, comments) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null,comments);
		});
	},
	
	findById: function(id, callback) {
			commentCon.findById(id, function(err, comment) {
				if(err) {
					callback(err, null);
					return;
				}
				callback(null, comment);
			});
	},

	update: function(id, params, callback) {
		commentCon.findByIdAndUpdate(id, params, {new:true}, function(err,comment) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, comment);
		})
	},

	create: function(params, callback) {
		commentCon.create(params, function(err, comment) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, comment);
		})
	},

	destroy: function(id, callback) {
		commentCon.findByIdandRemove(id, function(err) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, null);	
		})	
	}
}