// Task 5
let box = document.getElementById("box");
box.onmouseover = function () {
  box.style.background = "red";
};
box.onmouseout = function () {
  box.style.background = "lightblue";
};

// Task 6
let inp = document.getElementById("inp");
inp.onkeyup = function () {
  document.getElementById("out").innerText = inp.value;
};
