var newUl = $("#root").createElement("ul");
var newButton = document.createElement("button");
add_task_button.setAttribute("id", "one-task");
add_task_button.addEventListener("click", addInput);
add_task_button.innerHTML = "Добавить";
function addInput()
{
  var newLi = newUl.createElement("li");
  var newSpan = newLi.createElement("span");
  newSpan.innerHtml = "Сделать задание #3 по web-программированию";
  newLi.appendChild(newSpan);
  var newInput = newLi.CreateElement("button");
  newInput.setAttribute("name", "Удалить");
  newInput.innerText = "Удалить";
  newInput.addEventListener("click", deleteInput);
  newLi.appendChild(newInput);
  newUl.appendChild(newLi);
}
addInput();
$("root").appendChild(add_task_button);
function deleteInput()
{
  this.parentNode.remove();
}
