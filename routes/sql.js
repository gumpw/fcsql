/**
 *
 * Author: Magic Joey
 * Description: SQL生成，SQL模版设置，SQL管理。数据库管理
 * Created: 2015-05-21 1:24 PM, V1.0
 *
 */

var express = require('express');
var router = express.Router();

var sqlDDL = "create sequence CMF.span(way-data='sql.seqName')=sql.seqName\n"+
    "minvalue 1\n"+
    "maxvalue 9999999999\n"+
    "start with 1\n"+
    "increment by 1\n"+
    "cache 20;\n"+
    " \n"+
    "grant select on CMF.<span way-data='sql.seqName'>sql.seqName</span> to CMFUSER;\n"+
    " \n"+
    "create or replace synonym CMFUSER.<span way-data='sql.seqName'>sql.seqName</span>\n"+
    "  for CMF.<span way-data='sql.seqName'>sql.seqName</span>;\n";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('sql', {  sqlContent: sqlDDL });
});

module.exports = router;