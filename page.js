
function myFunction(checkbox) {
	if (checkbox.checked == true) {
		//document.getElementById("header__menu").style.display = "block";
		
		document.querySelector(".header__menu").classList.toggle("header__menu--active");
			
	} 
	//else {
		////document.getElementById("header__menu").style.display = "none";
		//document.querySelector(".header__menu").classList.toggle("header__menu");
	//}
}
