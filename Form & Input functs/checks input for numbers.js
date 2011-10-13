/**
*
* called on keyup event on an input - returns false if not a number
* the commented elm.value = "1"; can be changed to have the input revert to any number required if NaN pressed
*
*/


function onlyNumbers(e){
    
    if (!e) var e = window.event; // for browser compatibility
    var elm = document.attachEvent ? e.srcElement : e.target;
    var charCode = e.which || e.keyCode;
    
	//character codes 31-48 and >57 = numbers
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
	
      elm.value = "1"; //set value to revert value to.

      return false;
    }else return true;
}
//NOTE: You could also use filter_var($input,FILTER_VALIDATE_INT) [or FILTER_VALIDATE_FLOAT] to achieve similar results. CTD.