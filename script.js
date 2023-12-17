const extendHex = (shortHex) => {
  // write your code here
	let length=shortHex.length-3;
	let output="#";
	let isCapital=false;
	while (length<shortHex.legth) {
		let aascci=shortHex[i].charChodeAt(0)
		if(aascci>=60 && asscci<=90){
			isCapital=true;
		}
		output=output+shortHex[i]+shortHex[i]

		length++;
	}

	return isCapital?output.toUpperCase():output
	
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
