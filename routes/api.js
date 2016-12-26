var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req,res,next) {
	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource request ' + resource
		});
		return;
	}

	controller.find(req.query, function(err,results){
		if(err) {
			res.json({
				confirmation:'fail',
				message: err
			});			
		}
		else {
			res.json({
				confirmation:'success',
				results: results 
			});
		}
	});
});

router.post('/:resource', function(req,res,next) {
	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource request ' + resource
		});
		return;
	}

	controller.create(req.body, function(err,results){
		if(err) {
			res.json({
				confirmation:'fail',
				message: err
			});			
		}
		else {
			res.json({
				confirmation:'success',
				results: results 
			});
		}
	});
	
	
});

router.get('/:resource/:id', function(req,res,next) {
	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource request ' + resource
		});
		return;
	}

	var id = req.params.id;

	controller.findById(id, function(err,results){
		if(err) {
			res.json({
				confirmation:'fail',
				message: err
			});			
		}
		else {
			res.json({
				confirmation:'success',
				results: results 
			});
		}
	});
	
});

module.exports = router;