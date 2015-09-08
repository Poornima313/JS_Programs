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

var arr = [5,9,7,1,2,4,11,20,14];

var arr_sorted = asc_order(arr);

var last = arr_sorted.length-1;

console.log(arr_sorted[last]);