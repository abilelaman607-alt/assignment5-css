let tasks = [];

function render() {
  let list = document.getElementById("t-list");
  list.innerHTML = ""; // Очищаем список для перерисовки

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");

    // Текст задачи (клик -> зачеркнуть)
    let span = document.createElement("span");
    span.innerText = task.text;
    span.style.cursor = "pointer";
    if (task.done) span.style.textDecoration = "line-through";
    span.onclick = function () {
      tasks[index].done = !tasks[index].done;
      render();
    };

    // Кнопка удаления
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function () {
      tasks.splice(index, 1);
      render();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById("t-add").onclick = function () {
  let inp = document.getElementById("t-inp");
  if (inp.value.trim() !== "") {
    tasks.push({ text: inp.value, done: false });
    inp.value = "";
    render();
  }
};
