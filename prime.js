function checkPrime(number){
	let count = 0;
	for(let i=1;i<=Math.sqrt(number);i++){
		if(number%i==1){
			count++;
		}
	}
	if(count==1){
		console.log("Prime);
	}else{
		console.log("Not Prime");
	}

}

checkPrime(23);