function myFunction() {


	const checkbox = document.querySelector("#check");

	const header = document.querySelector(".header__menu");

	if (checkbox.checked == true) {
		header.classList.toggle("header__menu--active");
		console.log(checkbox.checked);
	} else {
		header.classList.toggle("header__menu--disable");
		//checkbox.checked = false;
		console.log(checkbox.checked);
	}
}

function myNavbar() {
	const checkbox = document.querySelector("#check");

	document
		.querySelector(".header__menu")
		.classList.toggle("header__menu--disable");

	checkbox.checked = false;		
	console.log(checkbox.checked);
}
