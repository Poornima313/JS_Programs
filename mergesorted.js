

var a1 = [2,5,10,15,20];
var b1 = [4,6,12];

function merge(a,b){

	var a_len = a.length;
	var b_len = b.length;

	var c = [];

	var i = 0;
	var j = 0;
	var k = 0;

	while(i < a_len && j < b_len){
		if(a[i] < b[j]){
			c[k] = a[i];
			i++;
		}else{
			c[k] = b[j];
			j++
		}
		k++;
	}

	if(i == a_len){
		for(var m = j; m < b_len; m++){
			c[k] = b[m];
			k++
		}
	}else{
		for(var m = i; m < a_len; m++){
			c[k] = a[m];
			k++;
		}
	}
	return c;
}

console.log(merge(a1,b1));