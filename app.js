var newInput = document.createElement("input");
newInput.setAttribute("id", "add_input");
newInput.setAttribute("type", "text");
var taskButton = document.createElement("button");
taskButton.setAttribute("id", "add_button")
taskButton.addEventListener("click", addElementByButton);
taskButton.innerHTML = "Добавить";
document.getElementById("root").appendChild(newInput);
document.getElementById("root").appendChild(taskButton);
//$("#root").prepend(taskButton);
//$("#root").prepend(newInput);
var string = "Сделать задание #3 по web-программированию";
addElement(string);
function addElement(string)
{
  var newButton = document.createElement('button');
  newButton.setAttribute("name", "Удалить");
  newButton.innerText = "Удалить";
  newButton.addEventListener("click", deleteButton);
  var newSpan = document.createElement("span");
  newSpan.innerHTML = string;
  var newLi = document.createElement("li");
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
  var newUl = document.createElement("ul");
  newUl.appendChild(newLi);
  document.getElementById("root").appendChild(newUl);
  //$("#root").append(newUl);
}
function addElementByButton() {
  addElement(newInput.value);
}
function deleteButton () {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
