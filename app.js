//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);
  //Filter task event
  filter.addEventListener('keyup', filterTask);
}

//Add task function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  } else if (taskInput.value.trim().length === 0) {
    alert('Cannot add blank task');
  } else {
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class to link
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link into li
    li.appendChild(link);

    //Add li as child to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';
  }

  e.preventDefault();
}

//Remove task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear tasks function
function clearTasks(e) {
  const lis = document.querySelectorAll('li.collection-item');
  lis.forEach(li => li.remove());

  e.preventDefault();
}

//Filter tasks function
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('li.collection-item');
  lis.forEach(task => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
