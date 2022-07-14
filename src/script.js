const form = document.querySelector("form"),
	eInput = form.querySelector(".input"),
	data = form.querySelector(".data");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	form.classList.add("error");
	form.classList.remove("valid");
	if (eInput.value == "") {
		data.innerText = "Email can't be blank";
	} else if (!eInput.value.match(pattern)) {
		data.innerText = "Please enter a valid email";
	} else {
		form.classList.replace("error", "valid");
		data.innerText = "This is a valid email";
	}
});
