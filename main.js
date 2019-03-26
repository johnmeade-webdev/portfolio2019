// ------------------------------
// vertical ventering that preserves shape-outside
// ------------------------------

mainSpacing();
function mainSpacing(){
    let mainHeight = document.querySelector('#landscape').offsetHeight;
    let rightMainPar = document.querySelector('#rightMainP').offsetHeight;
    document.querySelector('#main-right').style.padding = `${(mainHeight - rightMainPar)/2}px 0 0 0`;
}

// ------------------------------
// changes height of the nav div based on scroll location
// ------------------------------

window.onscroll = function() {navChange()};
function navChange(){
    if(window.scrollY > 100){
        document.querySelector('header').classList = 'collapsed';
        document.querySelector('ul').classList = 'collapsed';
    }else{
        document.querySelector('header').classList = 'full';
        document.querySelector('ul').classList = 'full';
    }
}

// ------------------------------
// shows/hides the contact modal
// ------------------------------

let modal = document.querySelector('#contact-modal');
let contactLink = document.querySelector('#contact');
let closeModal = document.querySelector('#close-modal');

contactLink.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}



// ------------------------------
// scroll-based navigation
// ------------------------------

document.querySelector('#home').onclick = function() {
    let scrollOptions = {
        left: 0,
        top: 0,
        behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
}

document.querySelector('#projects').onclick = function() {
    let scrollOptions = {
        left: 0,
        top: 492,
        behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
}

document.querySelector('#about').onclick = function() {
    let scrollOptions = {
        left: 0,
        top: 800,
        behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
}

// ------------------------------
// chevron scrolling for horizontal overflow of project display
// ------------------------------

document.querySelector("#chevron").onclick = function() {
    document.querySelector("#project-container").scrollBy ({
        top: 0,
        left: 350,
        behavior: 'smooth'
    });
}
