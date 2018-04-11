var peopleMap = new Map();
peopleMap.set("Warren, Ryder","9999999999");

function dial(personName){

	
	if( /Android/i.test(navigator.userAgent) ) {
 		window.location.href=("tel: +" + personMap.get(personName.value));
	}else{
		window.open("tel: +" + phoneNum);
	}
}