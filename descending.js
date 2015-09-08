var des_order = function(arr){
	var len = arr.length;
	for(var i = len-1; i >= 0; i--){
		for(var j = 1; j <= i; j++){
			if(arr[j-1] < arr[j]){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(des_order([7,5,10,9,1,11,15,3]));