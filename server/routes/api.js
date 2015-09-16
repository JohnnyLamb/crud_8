var express = require('express');
var router = express.Router();
var Car = require('../models/cars');

// GET all cars
router.get('/cars', function(req, res, next) {
 res.send('hello');
});
// POST all cars
router.post('/cars',function(req,res,next){
  newCar = new Car ({
    make:req.body.make,
    model:req.body.model,
    year:req.body.year,
    color:req.body.color
  });
  newCar.save(function(err,carData){
    if(err){
      res.json({
        'message':err
      });
    } else {
      res.json(carData);
    }
  });
});

// PUT SINGLE CAR

router.put('/car/:id',function(req,res,next){
  var update = {
    make:req.body.make,
    model:req.body.model,
    year:req.body.year,
    color:req.body.color
  };
    Car.findByIdAndUpdate(req.params.id,update,function(err,carData){
      if(err){
        res.json({'message':err});
      } else {
        res.json(carData);
      }

    });
});

router.delete('/car/:id',function(req,res,next){
  Car.findByIdAndRemove(req.params.id,function(err,data){
    if(err){
      res.json({
          'message':err
      });

    }else{
      res.json(data);
    }

  });

});












module.exports = router;
