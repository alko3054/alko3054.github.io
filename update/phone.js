$(document).ready(function() { 
 $("#numtab").show(); 
 $("#contacttab").show();
 $("#addtab").show();
 $(".dialer").show();
 $("#content_contactlist").hide(); 
 $("#content_addcontact").hide(); 
 $("#content_help").hide(); 
 });

$("#numtab").click(function() {
	$("#content_contactlist").hide();
	$("#content_addcontact").hide();
	$("#content_help").hide(); 
	$("#content_dialer").show();
 });
 
$("#contacttab").click(function() { 
	$("#content_contactlist").show(); 
	$("#content_dialer").hide();
	$("#content_help").hide(); 
	$("#content_addcontact").hide();
});

$("#addtab").click(function() { 
	$("#content_addcontact").show();
	$("#content_dialer").hide();
	$("#content_help").hide(); 
	$("#content_contactlist").hide();
});

$("#helptab").click(function() { 
	$("#content_addcontact").hide();
	$("#content_dialer").hide();
	$("#content_help").show(); 
	$("#content_contactlist").hide();
});

$(".dialer").click(function() {
	document.getElementById("numfield").value = document.getElementById("numfield").value + document.getElementById(this.id).value;
});

$("#clear").click(function() {
	document.getElementById("numfield").value = document.getElementById(this.id).value;
	
});