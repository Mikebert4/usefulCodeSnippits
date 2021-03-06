/**
 * Ajax Abstraction
 * @param {Object} slot
 * 
 * called by ajax(URL of ajax, [function to do on sucessful completion of request (xmlDoc passed)]);
 * 
 * automatically appends <&sid="+Math.random()> to defeat cache problems.
 *
 */

function ajax(url,funct){
    
	var xmlhttp = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
    
	if(typeof funct == "function"){

     		xmlhttp.onreadystatechange = function(){
	 			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var xmlDoc = xmlhttp.responseXML;
                    funct(xmlDoc);
	}else{
		console.log('Non function passed to ajax()!');
	}
	
	xmlhttp.open("GET",url+"&sid="+Math.random(),true); //sid added to prevent caching
	xmlhttp.send(null);
}