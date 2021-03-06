var express = require('express');
var router = express.Router();
var gpio = require('rpi-gpio');

var value1 = true;

module.exports = function (app) {

    // for web interface
    app.get('/', function(req, res, next){
        res.render('index', { title: 'Express' });
    });

    // REST API for Digital I/O Control
    app.post('/io', function(req, res, next){

        var port = req.body.port;
        var status = req.body.status;

        gpio.setup(port, gpio.DIR_OUT, function(){
            gpio.write(port, status, function(err){
                if (err) {
                    console.log(err);
                    res.send({code:"500", result:err});
                } else {
                    res.send({code:"200", result:"no error with number : "+port});
                }
            });
        });

    });

};


