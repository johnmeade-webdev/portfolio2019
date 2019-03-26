mainSpacing();
function mainSpacing(){
    let mainHeight = document.querySelector('#landscape').offsetHeight;
    let rightMainPar = document.querySelector('#rightMainP').offsetHeight;
    document.querySelector('#main-right').style.padding = `${(mainHeight - rightMainPar)/2}px 0 0 0`;
}

window.onscroll = function() {navChange()};
function navChange(){
    console.log(window.scrollY)
    if(window.scrollY > 100){
        document.querySelector('header').classList = 'collapsed';
        document.querySelector('ul').classList = 'collapsed';
    }else{
        document.querySelector('header').classList = 'full';
        document.querySelector('ul').classList = 'full';
    }
}

let modal = document.querySelector('#contact-modal');
let contactLink = document.querySelector('#contact');

contactLink.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
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
        top: 787,
        behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
}
