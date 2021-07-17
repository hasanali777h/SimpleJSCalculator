/* function calc() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);

  var oper = document.getElementById("operators").value;

  if (oper === "+") {
    document.getElementById("result").value = n1 + n2;
  }

  if (oper === "-") {
    document.getElementById("result").value = n1 - n2;
  }

  if (oper === "/") {
    document.getElementById("result").value = n1 / n2;
  }

  if (oper === "*") {
    document.getElementById("result").value = n1 * n2;
  }
}*/

var input = document.getElementById("input").value;
document.getElementById("result").readOnly = true;
var showPress = function (val) {
  document.getElementById("input").value += parseInt(val);
};
function func() {
  document.getElementById("input").value = "";
}
function func2() {
  document.getElementById("input").value = "";
  document.getElementById("result").value = "";
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var res = "";
function disPlay(x) {
  let nan = document.getElementById("input").value;
  if (
    nan === "NaN" ||
    nan === "Infinity" ||
    nan === "undefined" ||
    nan === "-Infinity"
  ) {
    // delete Nan,infinity,undefined after entering the numbers.
    document.getElementById("input").value = "";
  }
  if (res && (x >= 0 || x <= 0)) {
    res = false;
    document.getElementById("input").value = "";
    document.getElementById("input").value += x;
  } else {
    document.getElementById("input").value += x;
    res = false;
    var y = [];
    y = document.getElementById("input").value;
    let p = y.length;
    if (
      (y[p - 2] === "*" ||
        y[p - 2] === "/" ||
        y[p - 2] === "%" ||
        y[p - 2] === "+" ||
        y[p - 2] === "-" ||
        y[p - 2] === ".") &&
      (x === "*" ||
        x === "/" ||
        x === "%" ||
        x === "+" ||
        x === "-" ||
        x === ".")
    ) {
      document.getElementById("input").value = y.slice(0, p - 1);
    }
  }
}

/* function backSpace() {
  let bakSpa = document.getElementById("input").value;
  if (bakSpa === "NaN" || bakSpa === "Infinity" || bakSpa === "undefined" || bakSpa === "-Infinity") {
    document.getElementById("input").value = "";
  } else {
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
  }

} */

function calc() {
  let exp = "";
  exp = document.getElementById("input").value;
  let l = exp.length;
  if (
    exp[0] == "*" ||
    exp[0] == "/" ||
    exp[0] == "%" ||
    exp[0] == "+" ||
    exp[l - 1] == "+" ||
    exp[l - 1] == "%" ||
    exp[l - 1] == "/" ||
    exp[l - 1] == "*" ||
    exp[l - 1] == "-"
  ) {
    document.getElementById("input").value = "NaN";
  } else {
    exp = document.getElementById("input").value;
    res = eval(exp);
    //console.log(res);
    document.getElementById("result").value = res;
    if (res === undefined) {
      document.getElementById("input").value = "";
    }
  }
}
