var asc_order = function(arr){
	var len = arr.length;

	for(var i = len-1; i >= 0; i--){
		for (var j = 1; j <= i; j++){
			if(arr[j-1] > arr[j]){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(asc_order([5,9,7,1,2,4,11,20,14]));
