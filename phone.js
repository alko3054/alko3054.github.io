$(document).ready(function() { 
 $("#numtab").show(); 
 $("#contacttab").show();
 $("#addtab").show();
 $(".dialer").show();
 $("#content_contactlist").hide(); 
 $("#content_addcontact").hide(); 
 });

$("#numtab").click(function() {
	$("#content_contactlist").hide();
	$("#content_addcontact").hide();
	$("#content_dialer").show();
 });
 
$("#contacttab").click(function() { 
	$("#content_contactlist").show(); 
	$("#content_dialer").hide();
	$("#content_addcontact").hide();
});

$("#addtab").click(function() { 
	$("#content_addcontact").show();
	$("#content_dialer").hide();
	$("#content_contactlist").hide();
});