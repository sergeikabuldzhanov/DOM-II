// Your code goes here
const logo = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navLink = document.querySelector('.nav-link');
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const contentSection = document.querySelector('.content-section');
const inverseContent = document.querySelector('.inverse-content');
const contentDestination = document.querySelector('.content-destination');
const destination = document.querySelector('.destination');
const footer = document.querySelector('.footer');

logo.addEventListener('mouseover', event=>{
    logo.style.fontSize = '3rem';
});
nav.addEventListener('keydown', event=>{
    nav.style.backgroundColor = `#${event.key}${event.key}${event.key}`;
});
navLink.addEventListener('wheel', event=>{
    navLink.style.color = 'red';
    navLink.style.fontFamily = 'sans-serif';
});
introImg.addEventListener('drag', event=>{
    TweenMax.to(".intro img", 1, {x:100});
});
introH2.addEventListener('load', (event)=> {
    introH2.textContent = introH2.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;
});
contentSection.addEventListener('focus', event=>{

});
window.addEventListener('resize', event=>{
    inverseContent.style.display = 'none';
});
window.addEventListener('scroll', event=>{
    console.log(event);
    contentDestination.style.borderColor = `blue`;
    contentDestination.style.borderStyle = `solid`;
    contentDestination.style.borderWidth = `5px`;
});
destination.addEventListener('select', event=>{
    destination.style.color = 'red'
});
footer.addEventListener('dblclick', event=>{
    footer.style.backgroundColor = 'pink';
});

const navItems = document.querySelectorAll('nav a');
navItems.forEach(elem=>{
    elem.addEventListener('click', ()=>{
        event.preventDefault();
    });
});