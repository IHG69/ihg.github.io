let is_dark = true;

const changeMode = () => {
	document.body.classList.toggle(is_dark ? "light" : "dark");
	is_dark = !is_dark;
}

const main = () => {
	const mode_switcher = document.getElementById("mode-switcher");
	mode_switcher.onclick = changeMode;
	return 0;
}

addEventListener("DOMContentLoaded", (__event) => {
	const ret = main();
	if (ret !== 0) {
		console.error("An error has occurred!");
	}
})
