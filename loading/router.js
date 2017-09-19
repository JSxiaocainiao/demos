/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-18 23:55:46
 * @version $Id$
 */

app.get("/loadingmore",function(req,res){
	var index = parseInt(req.query.index);
	var len = req.query.length;
	var data = [];
    for(var i=0;i<parseInt(len);i++){
    	data.push('新闻' + (index+i));
    }
    res.send(data);
})