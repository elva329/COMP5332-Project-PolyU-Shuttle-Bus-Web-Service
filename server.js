var express=require('express');　　　　　　　　 
var app=express();　　　　　　　　　　　　　　 //create an express instance
var bodyParser = require('body-parser');
var mongojs=require('mongojs');
var db_routes=mongojs('localhost:27017/bus',['routes']);
var db_campus = mongojs('localhost:27017/bus', ['buslist_campus']); 
var db_chun = mongojs('localhost:27017/bus', ['buslist_chun']); 
var db_hung = mongojs('localhost:27017/bus', ['buslist_hung']); 
var db_siu = mongojs('localhost:27017/bus', ['buslist_siu']); 
var db_admin=mongojs('localhost:27017/bus',['admin']);
var db_campus1 = mongojs('localhost:27017/bus', ['buslist_campus1']); 
var db_chun1 = mongojs('localhost:27017/bus', ['buslist_chun1']); 
var db_hung1 = mongojs('localhost:27017/bus', ['buslist_hung1']); 
var db_siu1 = mongojs('localhost:27017/bus', ['buslist_siu1']); 
//connect to mongodb,'/bus'is the database,['routes'] is one of the collections

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/buslist', function (req, res) {       
  console.log('I received a GET request');
  db.buslist.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_campus', function (req, res) {       
  console.log('I received a GET request');
  db_campus.buslist_campus.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_chun', function (req, res) {       
  console.log('I received a GET request');
  db_chun.buslist_chun.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_hung', function (req, res) {       
  console.log('I received a GET request');
  db_hung.buslist_hung.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_siu', function (req, res) {       
  console.log('I received a GET request');
  db_siu.buslist_siu.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_campus1', function (req, res) {       
  console.log('I received a GET request');
  db_campus1.buslist_campus1.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_chun1', function (req, res) {       
  console.log('I received a GET request');
  db_chun1.buslist_chun1.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_hung1', function (req, res) {       
  console.log('I received a GET request');
  db_hung1.buslist_hung1.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.get('/buslist_siu1', function (req, res) {       
  console.log('I received a GET request');
  db_siu1.buslist_siu1.find(function (err, docs) {        
    console.log(docs);
    res.json(docs);
  });
});

app.post('/buslist_add_campus', function (req, res) {      
  console.log(req.body);
  db_campus.buslist_campus.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_chun', function (req, res) {      
  console.log(req.body);
  db_chun.buslist_chun.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_hung', function (req, res) {      
  console.log(req.body);
  db_hung.buslist_hung.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_siu', function (req, res) {      
  console.log(req.body);
  db_siu.buslist_siu.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_campus1', function (req, res) {      
  console.log(req.body);
  db_campus1.buslist_campus1.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_chun1', function (req, res) {      
  console.log(req.body);
  db_chun1.buslist_chun1.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_hung1', function (req, res) {      
  console.log(req.body);
  db_hung1.buslist_hung1.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.post('/buslist_add_siu1', function (req, res) {      
  console.log(req.body);
  db_siu1.buslist_siu1.insert(req.body, function(err, doc) {      
    res.json(doc);
  });
});

app.delete('/buslist_remove_campus/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_campus.buslist_campus.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_hung/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_hung.buslist_hung.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_chun/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_chun.buslist_chun.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_siu/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_siu.buslist_siu.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_campus1/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_campus1.buslist_campus1.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_hung1/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_hung1.buslist_hung1.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_chun1/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_chun1.buslist_chun1.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.delete('/buslist_remove_siu1/:id', function (req, res) {         
  var id = req.params.id;
  console.log(id);
  db_siu1.buslist_siu1.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {    
    res.json(doc);
  });
});

app.get('/buslist_edit_campus/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_campus.buslist_campus.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_chun/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_chun.buslist_chun.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_hung/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_hung.buslist_hung.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_siu/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_siu.buslist_siu.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_campus1/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_campus1.buslist_campus1.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_chun1/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_chun1.buslist_chun1.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_hung1/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_hung1.buslist_hung1.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.get('/buslist_edit_siu1/:id', function (req, res) {      
  var id = req.params.id;
  console.log(id);
  db_siu1.buslist_siu1.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {   
    res.json(doc);
  });
});

app.put('/buslist_update_campus/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_campus.buslist_campus.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_hung/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_hung.buslist_hung.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_chun/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_chun.buslist_chun.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_siu/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_siu.buslist_siu.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_campus1/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_campus1.buslist_campus1.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_hung1/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_hung1.buslist_hung1.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_chun1/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_chun1.buslist_chun1.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.put('/buslist_update_siu1/:id', function (req, res) {   
  var id = req.params.id;
  console.log(req.body.name);
  db_siu1.buslist_siu1.findAndModify({                
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {campus: req.body.campus, chun: req.body.chun, hung: req.body.hung,siu: req.body.siu,type: req.body.type}},  
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

// the response for the "'get' request"

app.get('/login/:user/:pwd',function(req,res){
	var user=req.params.user;
	var pwd=req.params.pwd;
	db_admin.admin.find({"user": user,"pwd": pwd},function(err,docs){
		console.log(docs);
		res.json(docs);
	});

});


app.get('/routes',function(req,res){

	console.log("i received a get request");	
  //var route_id=reg.params.getroute_id;
	db_routes.routes.find(function(err,docs){
	console.log(docs);
	res.json(docs);
	});

}); 
/*
app.get('/search/:start/:end',function(req,res){
	var start=req.params.start;
	var end=req.params.end;
	console.log("i receive a search request");
	db_routes.routes.find({$or:[{"start":start,"end": end},{"start":start,"stop1":end},{"start": start,"stop2": end},{"start": start ,"end": end}]},function(err,doc){
    res.json(doc);
  }); 	 					
});
*/
app.get('/search/:start/:end',function(req,res){
  var start=req.params.start;
  var end=req.params.end;
  console.log(start);
  console.log(end);
  console.log("i receive a search request");
  db_routes.routes.find({$or:[{"start": start,"end": end},{"start": start,"stop1": end},{"start": start,"stop2": end}]},function(err,doc){
    res.json(doc);
  });             
});

app.delete('/delete/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db_routes.routes.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
	
});

app.post('/add',function(req,res){
	console.log("i get the post");
	console.log(req.body);
	db_routes.routes.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

app.get('/edit/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db_routes.routes.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put('/update/:id',function(req,res){
	var id=req.params.id;
	var route_id=req.body.route_id;
	console.log(req.body.route_id);
	db_routes.routes.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{route_id:req.body.route_id,start:req.body.start,stop1:req.body.stop1,stop2:req.body.stop2,end:req.body.end,time:req.body.time}},
		new:true},function(err,doc){
			res.json(doc);
	});
});

app.listen(3000);　　　　　　　　　　　　　　　//define listening port 3000
console.log("Server running on port 3000");　 //print the message if the server is connected successfully

