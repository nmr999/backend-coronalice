
const flatten = () => {
	// Write your code here
	var flatten = function(a, shallow,r){
		if(!r){ r = []}
		 
	  if (shallow) {
		return r.concat.apply(r,a);
		}
			
		 for(var i=0; i<a.length; i++){
			  if(a[i].constructor == Array){
				  flatten(a[i],shallow,r);
			  }else{
				  r.push(a[i]);
			  }
		  }
		  return r;
	}
	console.log(flatten([1, [2,3], [[4],[5]]]));
};
flatten();
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]]))
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
