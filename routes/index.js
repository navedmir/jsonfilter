const   express = require('express'),
        router  = express.Router(),
        requestParser_controller = require('../controllers/requestParser');


//handle default json post request 
router.post('/', requestParser_controller.parseJsonPayload);    

module.exports = router;