const express = require('express'),
        router = express.Router(),
        requestParser_controller = require('../controllers/requestParser'),
        swaggerUi = require('swagger-ui-express'),
        swaggerDocument = require('../swagger.json');


router.use('/', swaggerUi.serve);
//handle default get request
//router.get('/', swaggerUi.setup(swaggerDocument));

router.get('/', function(req,res){res.send("hi")});

//handle default json post request 
router.post('/', requestParser_controller.parseJsonPayload);

module.exports = router;