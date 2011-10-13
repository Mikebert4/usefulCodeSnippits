/**
*  @function dateRageOfWeek
*   @param weekNo, number of week (1-52)
*   converts a week number into a date range
*/
function getDateRangeOfWeek(weekNo){
	var d1 = new Date();
	d1.setDate(d1.getDate() - eval(d1.getDay()- 1));
	var weekNoToday = d1.getWeek();
	d1.setDate(d1.getDate() + eval( 7 * eval( weekNo - weekNoToday ) ));
	var rangeIsFrom =  d1.toLocaleDateString();
	d1.setDate(d1.getDate() + 6);
	return [rangeIsFrom,d1.toLocaleDateString()];
};


/**
* @function getDayFromWeek
* converts a week numer (1-52) plus a day number (1-7) into a date
*  @param weekNo, number of week (1-52)
*  @param dayNo, number of day in week (1-7)
*/

function getDayFromWeek(weekNo,dayNo){
	var d = new Date();
	d.setDate(d.getDate() - eval(d.getDay()- 1));
	var weekNoToday = d.getWeek();
	d.setDate(d.getDate() + eval( 7 * eval( weekNo - weekNoToday ));
	d.setDate(d.getDate() + dayNo);
	return toLocaleDateString;
};