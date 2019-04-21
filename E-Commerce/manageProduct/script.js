var task = document.getElementById('task');
var btn = document.getElementById('btn');
var ul = document.querySelector('ul');
var products = [];
 var ENTER_KEY_CODE = 13;
 var STATUS_OK = 200;
 var opened=0;

function load()	{				// Onload Function
	console.log('hi')

	var request1 = new XMLHttpRequest();
  	request1.open('GET', '/1.txt');
    request1.addEventListener('load', function() 
    {
    		console.log('ra')
      if (request1.status === STATUS_OK) {    
          products= JSON.parse(request1.responseText);
			for(var i=0;i<products.length;i++)
			{
				addProducttoDOM(products[i]);
			}		
      } 
     });
  	
    request1.send();

}

function addProducttoArray() {
	var objProduct = new Object();
	objProduct.task = task.value;
	task.value = "";
	products.push(objProduct);
	addProducttoDOM(objProduct);

	var arr=[];
	var request = new XMLHttpRequest();
    request.addEventListener('load', function() 
    {
      if (request.status === STATUS_OK) {

      } 
     });
    request.open('POST', '/1.txt');
    arr.push(objProduct);
    request.send(JSON.stringify(arr));
}

function addProducttoDOM(objProduct) {
	var p = document.createElement("p");
	var li = document.createElement("li");
	var btn = document.createElement("button");
	p.innerHTML = objProduct.task;
	btn.innerHTML = 'X';
	li.appendChild(p);
	li.appendChild(btn);
	ul.appendChild(li);
	btn.addEventListener("click", function() {
	
		var request = new XMLHttpRequest();
		request.open("DELETE", '/1.txt');
		request.send(JSON.stringify(objProduct));		
		
		console.log("delete");
		load();
	})

}

btn.addEventListener("click", function() {
	addProducttoArray();
})