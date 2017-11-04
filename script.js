var arr = "rostik";
var i = 0;
var ask = prompt("введите букву");

while (i < arr.length) {
  if (ask == arr[i]) {
    alert(i + 1);
    break;
  }
  i++;
}

if (ask != arr[i]) {
  alert("-1");
}
