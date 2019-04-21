var express = require('express');
var fs = require('fs');
var app = express();

app.post("/1.txt", function (request, response) {
	addToFileproductDetails(request, function() {
		response.end();
	})
})

app.delete("/1.txt", function (request,response) {
	var newData = [];
	var data2;
	fs.readFile("manageProduct/1.txt",  function(error, oldData) {
		if(error) {
		throw error;
	}

	if(oldData.toString())
		newData = JSON.parse(oldData);

	var body = '';
	 	request.on('data', function(chunk) {
			body += chunk;
		});

		request.on('end', function() {
			var data1 = body;
			//console.log(data1)
			for(var i=0;i<newData.length;i++)
			{
				data2 = JSON.stringify(newData[i])
				//console.log(data2)
				if(data1 == data2) {
					newData.splice(i,1);
					//console.log('hi')
				}
			}
		fs.writeFile("manageProduct/1.txt", JSON.stringify(newData), function (error) {
			if(error) {
					throw error;
			}
		});
		})
			//console.log(newData)				
	})	
})

function addToFileproductDetails(request, callback) {
	var newData = [];
	fs.readFile("manageProduct/1.txt",  function(error, oldData) {
		if(error) {
			throw error;
		}
		if(oldData.toString())
			newData = JSON.parse(oldData);
		var body = '';
	 	request.on('data', function(chunk) {
			body += chunk;
		});

		request.on('end', function() {
			//console.log(body)

			var data = JSON.parse(body);
			newData.push(data[0]);
			fs.writeFile("manageProduct/1.txt", JSON.stringify(newData), function (error) {
				if(error) {
					throw error;
				}
			});
		});
	});
}

app.get("/1.txt", function (request, response) {
fs.readFile('manageProduct/1.txt', function(error, contents) 
  {
    if (error) 
      throw error;

    var tasks;
    if (contents.length === 0) 
      tasks = [];
    else 
      tasks = JSON.parse(contents);
    login=tasks;
   // console.log(tasks);
    	response.writeHead(200, {'Content-type': 'application/json'});
        response.write(JSON.stringify(tasks));
        response.end();
  });
})




app.use(express.static('manageProduct'));
app.listen(8000);
console.log("Running on localhost")
