function(number){
	let count = 0;
	for(let i=1;i<=number/2;i++){
		if(number%i==0){
			count++;
		}
	}
	if(count==1){
		console.log("Prime);
	}else{
		console.log("Not Prime");
	}

}