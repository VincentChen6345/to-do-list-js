const taskList = document.getElementById("taskList-container");
const addTaskBTN = document.getElementById("addtask-btn");
const taskText = document.getElementById("task-item_text");
//when add task btn is clicked
//create new list element, extract string from input field, extract priority from select dropdown , place list element in an array

const check = () => {
  taskText.classList.toggle("strikethrough");
};
