const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});