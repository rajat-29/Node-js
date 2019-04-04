console.log('ho');

(function(window, document, undefined)
 {
  var ENTER_KEY_CODE = 13;
  var STATUS_OK = 200;0


  var taskInput = document.getElementById('task');
  var taskList = document.getElementById('task-list');
  var submit = document.getElementById('lop');
  var fileno = document.getElementById('fileno').value;



  var data1 = document.getElementById('data1');
  var data2 = document.getElementById('data2');
  var data3 = document.getElementById('data3');

  var request = new XMLHttpRequest();

  data1.addEventListener('click', function() 
  {
    request.addEventListener('load', function() 
    {
      if (request.status === STATUS_OK) {
      var tasks = JSON.parse(request.responseText);
      console.log(tasks);
        taskList.innerHTML = "";

      tasks.forEach(function(task) {
        var li = document.createElement('li');
        li.innerHTML = task.text;
        taskList.appendChild(li);
      });
      }
    });

    request.open('GET', '/task1');
    request.send();

  });

  data2.addEventListener('click', function() 
  {
  
    request.addEventListener('load', function() 
    {
      if (request.status === STATUS_OK) {
      var tasks = JSON.parse(request.responseText);
      console.log(tasks);
      taskList.innerHTML = "";

      tasks.forEach(function(task) {
        var li = document.createElement('li');
        li.innerHTML = task.text;
        taskList.appendChild(li);
      });
      }
    });

    request.open('GET', '/task2');
    request.send();

  });

  data3.addEventListener('click', function() 
  {
  
    request.addEventListener('load', function() 
    {
      if (request.status === STATUS_OK) {
      var tasks = JSON.parse(request.responseText);
      console.log(tasks);
      taskList.innerHTML = "";

      tasks.forEach(function(task) {
        var li = document.createElement('li');
        li.innerHTML = task.text;
        taskList.appendChild(li);
      });
      }
    });

    request.open('GET', '/task3');
    request.send();

  });

  submit.addEventListener('click', function(event) 
  {
    taskList.innerHTML = "";

      fileno = document.getElementById('fileno').value;
      console.log(fileno);
      event.preventDefault();
      addTaskToList(fileno);
  });

  /* Adds a new task item to the list, with the value from the
   * given input.
   *
   * Arguments:
   * taskInput -- the HTMLElement input tag
   */
  function addTaskToList(filenum) 
  {
    fileno = document.getElementById('fileno');
    if(filenum == 1) {
       if (taskInput.value) 
      {
         var request = new XMLHttpRequest();
         request.addEventListener('load', function() 
         {
            if (request.status === STATUS_OK) 
            {
              var li = document.createElement('li');
              li.innerHTML = taskInput.value ;
              taskInput.value = "";
              fileno.value = "";
              taskList.appendChild(li);
            }
         });
          request.open('POST', '/task1');
          request.send(JSON.stringify({ text: taskInput.value }));
      }
    }
    else if(filenum == 2) {
       if (taskInput.value) 
      {
         var request = new XMLHttpRequest();
         request.addEventListener('load', function() 
         {
            if (request.status === STATUS_OK) 
            {
              var li = document.createElement('li');
              li.innerHTML = taskInput.value ;
              taskInput.value = "";
              fileno.value = "";
              taskList.appendChild(li);
            }
         });
          request.open('POST', '/task2');
          request.send(JSON.stringify({ text: taskInput.value }));
      }
    }
    else if(filenum == 3) {
       if (taskInput.value) 
      {
         var request = new XMLHttpRequest();
         request.addEventListener('load', function() 
         {
            if (request.status === STATUS_OK) 
            {
              var li = document.createElement('li');
              li.innerHTML = taskInput.value ;
              taskInput.value = "";
              fileno.value = "";
              taskList.appendChild(li);
            }
         });
          request.open('POST', '/task3');
          request.send(JSON.stringify({ text: taskInput.value }));
      }
    }
  }

  taskList.addEventListener('click', function(event) {
    var target = event.target;
    var li = target.parentNode;

    if (target.classList.contains('check')) {
      event.preventDefault();
      if (li.classList.contains('checked')) {
        li.classList.remove('checked');
        target.innerHTML = '&#9744;';
      } else {
        li.classList.add('checked');
        target.innerHTML = '&#9745;';
      }

      localStorage.tasks = taskList.innerHTML;
    } else if (target.classList.contains("delete")) {
      event.preventDefault();
      li.parentNode.removeChild(li);
      localStorage.tasks = taskList.innerHTML;
    }
  });

})(this, this.document);
