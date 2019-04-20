var task = document.getElementById('task');
var btn = document.getElementById('btn');
var ul = document.querySelector('ul');
var products = [];
 var ENTER_KEY_CODE = 13;
 var STATUS_OK = 200;
 var opened=0;

function load()	{				// Onload Function
	
	var request = new XMLHttpRequest();
    request.addEventListener('load', function() 
    {
      if (request.status === STATUS_OK) {
          var tempLogin =[];
          products= JSON.parse(request.responseText);
          if(tempLogin!=null)
          {
			
			for(var i=0;i<products.length;i++)
			{
				addProducttoDOM(products[i]);
			}
			productId=products.length+1;
		}
      } 
     });
    request.open('GET', '/1.txt');
    request.send();
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
	p.innerHTML = objProduct.task;
	li.appendChild(p);
	ul.appendChild(li);
}


btn.addEventListener("click", function() {
	addProducttoArray();
})