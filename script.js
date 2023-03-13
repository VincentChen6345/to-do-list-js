const taskList = document.getElementById("taskList-container");
const addTaskBTN = document.getElementById("addtask-btn");
const taskText = document.getElementById("task-item_text");
const selectDropdown = document.getElementById("priority-dropdown");
const taskListArray = [];
let newItemObject = {};
//when add task btn is clicked
//create new list element, extract string from input field, extract priority from select dropdown , place list element in an array

const check = () => {
  itemText.classList.toggle("strikethrough");
};
const renderTaskList = () => {
  taskListArray.forEach((obj) => {
    //div element
    let newItem = document.createElement("div");
    newItem.classList.add("task-item");
    newItem.classList.add("border");

    //task paragraph string
    let itemText = document.createElement("p");
    itemText.classList.add("task-item_text");
    itemText.textContent = obj.text;

    //priority box
    let priorityBox = document.createElement("span");
    priorityBox.textContent = obj.priority;
    priorityBox.classList.add(`${obj.priority}`);
    priorityBox.classList.add(`priority-box`);
    console.log(priorityBox);

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
    penSVG.classList.add("fa-regular");
    penSVG.classList.add("fa-pen-to-square");
    penSVG.classList.add("pen");
    penSVG.classList.add("svg");
    penContainer.appendChild(penSVG);

    //trash svg
    let trashContainer = document.createElement("button");
    trashContainer.classList.add("svg-button");
    let trashSVG = document.createElement("i");
    trashSVG.classList.add("fa-regular");
    trashSVG.classList.add("fa-trash-can");
    trashSVG.classList.add("trash");
    trashSVG.classList.add("svg");
    trashContainer.appendChild(trashSVG);

    //appending all child items
    newItem.appendChild(itemText);
    newItem.appendChild(priorityBox);
    newItem.appendChild(checkbox);
    newItem.appendChild(penContainer);
    newItem.appendChild(trashContainer);
    taskList.appendChild(newItem);
  });
};
const clickHandler = (e) => {
  e.preventDefault();
  //extract string from input
  const inputTextField = document.getElementById("taskText");

  newItemObject.text = inputTextField.value;
  newItemObject.priority = selectDropdown.value;

  taskListArray.push(newItemObject);
  renderTaskList();
  //extract option value from select dropdown
  //create an object that contains the details of the new item -> text and priority
  //add that object to the array
  //loop through the array and create
};

addTaskBTN.addEventListener("click", clickHandler);

//Figure why the task list dupicates when i click add new task multiple times
