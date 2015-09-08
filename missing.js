var a = [5,2,6,1,3];

function missingNumber(arr){

	var len = arr.length;
	var n = len + 1;
	var sum = 0;
	var expectedSum = n * (n + 1) / 2;

	for(var i = 0; i < len; i++){
		sum += arr[i];
	}

	return expectedSum - sum;
}

console.log(missingNumber(a));