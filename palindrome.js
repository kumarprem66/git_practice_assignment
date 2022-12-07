function checkPalindrome(str){
	
	let bag = "";
	for(let i=str.length-1;i>=0;i--){
		bag += str[i];
	}
	if(str==bag){
		console.log("Palindrome);
	}else{
		console.log("Not a Palindrome");
	}

}

checkPalindrome("racecar);