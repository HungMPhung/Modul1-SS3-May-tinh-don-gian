function getvalue(number) {
    document.getElementById("input").value += number;
}
function getResult() {
    let inputvalue = document.getElementById("input").value;
    let result;
    result = eval(inputvalue);
    document.getElementById("input").value = result;
}
function clearInput() {
    document.getElementById("input").value = "";
}