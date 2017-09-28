function notifyFunction() {
	var fNamer=document.getElementById('ipfname').value;
	var lNamer=document.getElementById('iplname').value;







	if(null==fNamer||fNamer==""){
		document.getElementById('fname').innerHTML="Invalid.";
	}else{
		document.getElementById('fname').innerHTML="";
	}
	if(null==lNamer||lNamer==""){
		document.getElementById('lname').innerHTML="Invalid.";
	}else{
		document.getElementById('lname').innerHTML="";
	}
}