/* SMOOTH SCROLL */
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:'smooth'});
});
});

/* NAVBAR SCROLL EFFECT */
window.addEventListener('scroll',()=>{
const nav = document.querySelector('nav');
if(window.scrollY > 50){
nav.classList.add('scrolled');
} else{
nav.classList.remove('scrolled');
}
});

/* SCROLL ANIMATION */
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{
cards.forEach(card=>{
const rect = card.getBoundingClientRect();
if(rect.top < window.innerHeight - 100){
card.classList.add('show');
}
});
});
