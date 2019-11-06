/*
***************************************************************************
******************************  Logo Canvas  ******************************
***************************************************************************
*/

var canvasLogo = document.getElementById('logo-canvas');
var ctxLogo = canvasLogo.getContext('2d');

var gradient = ctxLogo.createLinearGradient(0, 0, 100, 0);
gradient.addColorStop("0"," magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

ctxLogo.font = "20px Verdana";
ctxLogo.fillStyle = gradient;
ctxLogo.fillText('iCuong', 5, 26);
