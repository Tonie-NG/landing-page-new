var toggleBtn;
var wrapper;
var hamburgerMenu;

function declare() {
    toggleBtn= document.querySelector('.toggle');
    wrapper = document.querySelector('.wrapper');
    hamburgerMenu = document.querySelector('.hamburger-menu');
}
const main = document.querySelector('main');

declare();

let dark = false;

function toggleAnimation() {
    //Clone 
    dark =! dark;
    let clone = wrapper.cloneNode(true);
    if(dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add('copy')
    main.appendChild(clone);
    document.body.classList.add('stop-scroll');

    clone.addEventListener("animationend", () => {
        document.body.classList.remove('stop-scroll');
        wrapper.remove();
        clone.classList.remove('copy');
        declare();
        events();
    })
}

function events() {
   toggleBtn.addEventListener('click', toggleAnimation); 
   hamburgerMenu.addEventListener('click', ()=> {
    wrapper.classList.toggle('active')
   })
}

events();

