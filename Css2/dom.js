// Task 2
document.getElementById("b1").onclick = function () {
  document.getElementById("p1").innerText = "Новый текст!";
};

// Task 3
document.getElementById("b2").onclick = function () {
  document.getElementById("d1").style.background = "yellow";
};
document.getElementById("b3").onclick = function () {
  document.getElementById("d1").style.fontSize = "24px";
};

// Task 4
document.getElementById("b4").onclick = function () {
  let li = document.createElement("li");
  li.innerText = "Новый элемент";
  document.getElementById("ul1").appendChild(li);
};
document.getElementById("b5").onclick = function () {
  let ul = document.getElementById("ul1");
  if (ul.lastElementChild) {
    ul.lastElementChild.remove();
  }
};
