//returns a drop-down selection box when passed an array and name for the element
function makeOptions(arr,n,addNull){
   var sel = document.createElement('Select');
   sel.name = n;
   
   if(addNull){
     var opt = document.createElement('option');
     opt.value = 0;
     opt.innerHTML = "-- Select one --";
     sel.appendChild(opt);
   }
   
   for(var i=0; i<arr.length; i++){
        if(arr[i] != undefined){
            var opt = document.createElement('option');
            opt.value = arr[i];
            opt.innerHTML = arr[i];
            
            sel.appendChild(opt);
        }
   }
   
   return sel;
}