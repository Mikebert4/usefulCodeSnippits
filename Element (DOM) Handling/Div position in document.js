/**
* Given an element returns the exact position of that element in the document as an array [leftOffset,topOffset]
* for use with position:absolute for accurate positioning of pop-up elements
*/
function divPos(elm){
 var lft=elm.offsetLeft;
 var top=elm.offsetTop;
 while(elm.offsetParent!=null){
  var par=elm.offsetParent;
  lft+=par.offsetLeft;
  top+=par.offsetTop;
  elm=par;
 } 
 return [lft,top];
}