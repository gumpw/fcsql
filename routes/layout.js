/**
 *
 * Author: Magic Joey
 * Description:模版
 * Created: 2015-05-21 1:12 PM, V1.0
 *
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express' });
});

module.exports = router;