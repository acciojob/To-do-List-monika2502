//your code here

// get references to the input and button elements
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// add event listener to the button element
addTodoBtn.addEventListener('click', function() {
  // get the value of the input element
  const newTodo = newTodoInput.value.trim();

  // check if the input value is empty, and if it is, alert the user and exit the function
  if (newTodo === '') {
    alert('Please enter a todo item.');
    return;
  }

  // create a new list item element with the input value as its text content
  const newTodoListItem = document.createElement('li');
  newTodoListItem.textContent = newTodo;

  // append the new list item element to the ordered list element
  todoList.appendChild(newTodoListItem);

  // clear the input element's value
  newTodoInput.value = '';
});