//css/html/js files from provided base files
//this file originally empty but edited based on the writeup

var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;

$(document).ready(function() { 

	$("#gestureResult").text("no gesture");	

});

$("#gestureArea").mousedown(function(event) {

	$("#gestureResult").text("mouse down");	

	downX = event.pageX; 
	downY = event.pageY;

});

$("#gestureArea").mouseup(function(event) { 

	$("#gestureResult").text("mouse up");	

	upX = event.pageX;
	upY = event.pageY;

	if (upX < downX) { 
		$("#gestureResult").text("swipe left");
	};

	if (upX > downX) { 
		$("#gestureResult").text("swipe right");
	};

	if (upX == downX) {
		$("#gestureResult").text("mouse up");
	};

});

