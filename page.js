//function myFunction() {
//const checkbox = document.querySelector("#check");
//const header = document.querySelector(".header__menu");

//if (checkbox.checked == true) {
//header.classList.toggle("header__menu--active");
//console.log(checkbox.checked);
//}
//if (checkbox.checked == false) {
////console.log(checkbox.checked);
//header.classList.toggle("header__menu--disable");
//////checkbox.checked = false;
//}
//}
//

let status = false;

function myNavbar() {
	const header = document.querySelector(".header__menu");

	header.classList.toggle("header__menu--disable");
	let status = false;
}

const checked = () => {
	const btn = document.querySelector(".btn_menu");
	const checkbox = document.querySelector("#check");
	const header = document.querySelector(".header__menu");
	const links = document.querySelectorAll(".nav-links");

	btn.addEventListener("click", () => {
		if (status == false) {
			let status = true;
			header.classList.toggle("header__menu--active");
		} else {
			let status = false;
			header.classList.toggle("header__menu--disable");
		}
	});

	//links.forEach(link => {

	//link.addEventListener("click", myNavbar());
	//});
};

checked();
