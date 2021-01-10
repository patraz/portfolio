const omnie = document.getElementById("omnie");
const projekty = document.getElementById("projekty");
const kontakt = document.querySelector('.form');
const li = document.querySelector('li')


const omnieBtn = document.getElementById('omniebtn');
const projektyBtn = document.getElementById('projektybtn');
const kontaktBtn = document.querySelector('.kontaktbtn');

console.log(projektyBtn)


omnieBtn.addEventListener('click', () => {
    omnie.scrollIntoView();
});

projektyBtn.addEventListener('click', () => {
    projekty.scrollIntoView();
});

kontaktBtn.addEventListener('click', () => {
    kontakt.scrollIntoView();
});

