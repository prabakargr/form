function notifyFunction() {
	var fNamer=document.getElementById('ipfname').value;
	var lNamer=document.getElementById('iplname').value;
	var mailid=document.getElementById('ipmail').value;
	var password=document.getElementById('ippass').value;
	var repassword=document.getElementById('iprepass').value;
	var bdaymonth=document.getElementById('ipbmonth').value;
	var bdaydate=document.getElementById('ipdate').value;
	var bdayyear=document.getElementById('ipyear').value;
	var mfgender=document.getElementById('ipgender').value;







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
	if (null==mailid||mailid=="") {
         document.getElementById('mail').innerHTML="Invalid"
	}else{
		document.getElementById('mail').innerHTML=""
	}
	if (null==password||password=="") {
		document.getElementById('pass').innerHTML="Invalid"
	}else{
		document.getElementById('pass').innerHTML=""
	}
	if (null==repassword||repassword=="") {
		document.getElementById('repass').innerHTML="Invalid"
	}else{
		document.getElementById('repass').innerHTML=""
	}
	if (null==bdaymonth||bdaymonth=="Birth Month") {
		document.getElementById('bmonth').innerHTML="Invalid"
	}else{
		document.getElementById('bmonth').innerHTML="Birth Month"
	}
	if (null==bdaydate||bdaydate=="") {
		document.getElementById('bdate').innerHTML="Invalid"
	}else{
		document.getElementById('bdate').innerHTML=""
	}
	if (null==bdayyear||bdayyear=="") {
		document.getElementById('byear').innerHTML="Invalid"
	}else{
		document.getElementById('byear').innerHTML=""
	}
	if (null==mfgender||mfgender=="Gender") {
		document.getElementById('gender').innerHTML="Invalid"
	}else{
		document.getElementById('gender').innerHTML="Gender"
	}
}