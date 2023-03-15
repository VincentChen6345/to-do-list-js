const taskList = document.getElementById("taskList-container");
const addTaskBTN = document.getElementById("addtask-btn");

const selectDropdown = document.getElementById("priority-dropdown");
const defaultContent = document.getElementById("default-content");
let taskListArray = [];
let newItemObject = {};
//when add task btn is clicked
//create new list element, extract string from input field, extract priority from select dropdown , place list element in an array

const check = () => {
  itemText.classList.toggle("strikethrough");
};
const renderTaskList = () => {
  let newObj = taskListArray[taskListArray.length - 1];
  console.log(newObj);
  //   taskListArray.map((obj) => {
  //div element
  let newItem = document.createElement("div");
  let newItemClasses = ["task-item", "border"];
  newItemClasses.forEach((className) => {
    newItem.classList.add(className);
  });

  //task paragraph span box
  let textBox = document.createElement("span");
  textBox.classList.add("task-item_span");
  //task paragraph string
  let itemText = document.createElement("p");
  itemText.classList.add("task-item_text");
  itemText.id = "task-item_text";
  itemText.textContent = newObj.text;
  textBox.appendChild(itemText);

  //priority box
  let priorityBox = document.createElement("span");
  let priorityBoxClasses = [`${newObj.priority}`, `priority-box`];
  priorityBox.textContent = newObj.priority;
  priorityBoxClasses.forEach((className) => {
    priorityBox.classList.add(className);
  });

  //checkbox
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", () => {
    itemText.classList.toggle("strikethrough");
  });
  checkbox.classList.add("complete-checkbox");

  //edit svg
  let penContainer = document.createElement("button");
  penContainer.classList.add("svg-button");
  let penSVG = document.createElement("i");
  let penSVGClasses = ["fa-regular", "fa-pen-to-square", "pen", "svg"];
  penSVGClasses.forEach((className) => {
    penSVG.classList.add(className);
  });
  penSVG.addEventListener("click", () => {
    textBox.setAttribute("contenteditable", "true");
    textBox.classList.add("edit-text");
  });
  penContainer.appendChild(penSVG);

  //trash svg
  let trashContainer = document.createElement("button");
  trashContainer.classList.add("svg-button");
  let trashSVG = document.createElement("i");
  let trashSVGClasses = ["fa-regular", "fa-trash-can", "trash", "svg"];
  trashSVGClasses.forEach((className) => {
    trashSVG.classList.add(className);
  });
  trashSVG.addEventListener("click", () => {
    newItem.remove();
  });
  trashContainer.appendChild(trashSVG);

  //appending all child items
  let childElements = [
    textBox,
    priorityBox,
    checkbox,
    penContainer,
    trashContainer,
  ];
  childElements.forEach((el) => {
    newItem.appendChild(el);
  });

  taskList.appendChild(newItem);
  //   }
};
const clickHandler = (e) => {
  e.preventDefault();
  //extract string from input
  defaultContent.remove();
  const inputTextField = document.getElementById("taskText");

  newItemObject.text = inputTextField.value;
  newItemObject.priority = selectDropdown.value;

  taskListArray.push(newItemObject);
  console.log(taskListArray);
  renderTaskList();
  inputTextField.value = "";

  //extract option value from select dropdown
  //create an object that contains the details of the new item -> text and priority
  //add that object to the array
  //loop through the array and create
};

addTaskBTN.addEventListener("click", clickHandler);

//fix border bug when you click on the edit button.
