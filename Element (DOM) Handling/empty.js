/**
* If I need to tell you what this does, you don't deserve to us it.
*
*/

function empty(elm){
    while(elm.hasChildNodes()) elm.removeChild(elm.lastChild);
}