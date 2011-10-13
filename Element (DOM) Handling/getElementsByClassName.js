/**
* Get Elements by Class Name
* Returns an array of elements with that class name
*
* @param className string, required
* @param tag [string="*"], optional - selects only elements with this tag and classname, default *
* @param elm [DOMElement="document"], optional - select only within this parent elm. Default = document
*/

function getElementsByClassName(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}