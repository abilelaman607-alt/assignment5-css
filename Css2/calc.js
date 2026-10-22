document.getElementById("btn").onclick = function () {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let op = document.getElementById("op").value;
  let res = 0;

  if (op === "+") res = n1 + n2;
  if (op === "-") res = n1 - n2;
  if (op === "*") res = n1 * n2;
  if (op === "/") res = n1 / n2;

  document.getElementById("res").innerText = res;
};
