


function forgetWhatToDoNow() {
	var theTime = new Date().getHours();
	var whatToDo
	if (theTime < 7) {
		whatToDo = "Go back to sleep"
	} 
	else if (theTime < 8) {
		whatToDo = "Usually now you are drinking coffee and listining to Music"
	}
	else if (theTime < 12) {
		whatToDo = "Usually now you ara studying coding"
	}
	else if (theTime < 14) {
		whatToDo = "you can rest or eat or any thing you want :-) "	
	}
	else if (theTime < 17 ) {
		whatToDo = "studying Duch"
	}
	else if (theTime < 18 ) {
		whatToDo = "Now is the time for dinner :-) "
	}
	else if (theTime < 22 ) {
		whatToDo = "coding coding coding"
	}
	else if (theTime <= 24 ) {
		whatToDo = "Go back to sleep"
	}
	else {
		whatToDo = "You are in a different planet Time zone sorry we can not help you"
	}
	document.getElementById("whatToDo").innerHTML = whatToDo;
}

