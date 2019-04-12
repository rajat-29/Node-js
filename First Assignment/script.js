var task = document.getElementById("task");
var fileName = document.getElementById("file");
var btn = document.getElementById("btn");
var getFile1 = document.getElementById("File1");
var getFile2 = document.getElementById("File2");
var getFile3 = document.getElementById("File3");
  var taskList = document.getElementById('task-list');
var ul = document.querySelector("ul");
var request = new XMLHttpRequest();

btn.addEventListener("click", function () {

	request.open("POST", "/" + fileName.value + ".txt");
	request.onload = function() {
		if(request.status === 200) {
			console.log("checking")
		}
	}
	var data = new Object();
	data.task = task.value;
	request.send(JSON.stringify(data));
	task.value = "";
	fileName.value = "";
});

getFile1.addEventListener("click", function () {
	taskList.innerHTML = "";
	var request = new XMLHttpRequest();
	request.open("GET", "/1.txt");
	request.addEventListener("load", function () {
		if(request.status == 200) {
			var data = [];
			data = request.responseText;
			data = JSON.parse(data)
			for(var i = 0;i<data.length;i++) {
					var li = document.createElement("li");
					var p = document.createElement("p");
					p.innerHTML = data[i]["task"];
					li.appendChild(p);
				
					ul.appendChild(li);				
			}
		}
	});
	request.send();
	
});

getFile2.addEventListener("click", function () {
	taskList.innerHTML = "";
	var request = new XMLHttpRequest();
	request.open("GET", "/2.txt");
	request.addEventListener("load", function () {
		if(request.status == 200) {
			var data = [];
			data = request.responseText;
			data = JSON.parse(data)
			for(var i = 0;i<data.length;i++) {
					var li = document.createElement("li");
					var p = document.createElement("p");
					p.innerHTML = data[i]["task"];
					li.appendChild(p);
					
					ul.appendChild(li);			
			}
		}
	});
	request.send();
});

getFile3.addEventListener("click", function () {
	taskList.innerHTML = "";
	var request = new XMLHttpRequest();
	request.open("GET", "/3.txt");
	request.addEventListener("load", function () {
		if(request.status == 200) {
			var data = [];
			data = request.responseText;
			data = JSON.parse(data)
			for(var i = 0;i<data.length;i++) {
					var li = document.createElement("li");
					var p = document.createElement("p");
					p.innerHTML = data[i]["task"];
					li.appendChild(p);
					
					ul.appendChild(li);			
			}
		}
	});
	request.send();
});

