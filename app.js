var i = 0;
function myFunc() {
	console.log(i);
	if (i < 10) {
		i++;
		setTimeout(myFunc, 1000);
	}
}

myFunc();