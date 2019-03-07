function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();






var count = 0; // global variable

function changeBackground(newColor) { // definition of function
	document.bgColor = newColor;
	count++;
	document.getElementById("demo").innerHTML="We changed the color "+count+" times!";
}

function onSliderChanged() {
	var r = document.getElementById("red").value;
	var g = document.getElementById("green").value;
	var b = document.getElementById("blue").value;
	document.bgColor = "#"+dh(r)+dh(g)+dh(b);
	document.getElementById("demo").innerHTML="rgb("+r+","+g+","+b+")="+document.bgColor;
}

function dh(d) { // decimal to hex conversion
    var hex = Number(d).toString(16);
    if (hex.length < 2) hex = "0" + hex;
    return hex;
}
