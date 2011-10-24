/*****************************************************************
 * This script allows us to add new functions to window.onload   *
 * without obliterating what's already there                     *
 *****************************************************************
 * <body onLoad=""> MUST NOT BE SET!                             *
 *****************************************************************
 */
var oldOnload = window.onload;
window.onload = function(){
    //this handles any legacy onload events currently existant
    if(typeof oldOnload != 'undefined') window.onload();
    
    //new functions to fire below:
    
    
}