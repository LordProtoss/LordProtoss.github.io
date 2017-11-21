/*var newInput = document.createElement("input");
newInput.setAttribute("id", "add_input");
newInput.setAttribute("type", "text");
var taskButton = document.createElement("button");
taskButton.setAttribute("id", "add_button")
taskButton.addEventListener("click", addElementByButton);
taskButton.innerHTML = "Добавить";
$("#root").prepend(taskButton);
$("#root").prepend(newInput);
addElement("Сделать задание #3 по web-программированию");
function addElement(string)
{
  var newButton = document.createElement('button');
  newButton.setAttribute("name", "Удалить");
  newButton.innerText = "Удалить";
  newButton.addEventListener('click', deleteButton);
  var newSpan = document.createElement('span');
  newSpan.innerHTML = string;
  var newLi = document.createElement('li');
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
  var newUl = document.createElement('ul');
  newUl.appendChild(newLi);
  document.getElementById("root").appendChild(newUl);
  $("#root").append(newUl);
}
function addElementByButton() {
  addElement(newInput.value);
}
function deleteButton () {
  this.parentNode.parentNode.removeChild(this.parentNode);
}*/
var input_string = "Сделать задание #3 по web-программированию";

var theInput = document.createElement('input');
theInput.setAttribute('id', 'add_task_input');
theInput.setAttribute('type', 'text');
var add_task_button = document.createElement('button');
add_task_button.setAttribute('id', 'add_task');
add_task_button.addEventListener('click', add_task);
add_task_button.innerHTML = "Добавить";
document.getElementById("root").appendChild(theInput);
document.getElementById("root").appendChild(add_task_button);
/*$('#root').prepend($('#add_task')); // делаю эл-т первым
$('#root').prepend($('#add_task_input'));*/

add_my_tags(input_string);

function add_my_tags(input_string) {
var theUl = document.createElement('ul');
var theLi = document.createElement('li');
var theSpan = document.createElement('span');
theSpan.innerHTML = input_string;
var button = document.createElement('button');
button.setAttribute("name", "Удалить");
button.innerText = "Удалить";
button.addEventListener('click', my_delete);
theLi.appendChild(theSpan);
theLi.appendChild(button);
theUl.appendChild(theLi);
document.getElementById("root").appendChild(theUl); //DOM API
//$('#root').append(theUl); // jQuery
}

function add_task() {
add_my_tags(theInput.value);
}

function my_delete () {
this.parentNode.parentNode.removeChild(this.parentNode);
}
