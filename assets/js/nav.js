const nav_toggler = document.querySelector('.nav-toggler');
const side_menu = document.querySelector('.side-menu');

function expand() {
    side_menu.style.top = '115px';
    nav_toggler.innerHTML = `<button type="button" onclick="close_menu()" id="close">
    <i class="fa fa-xmark"></i>
    </button> ` 
    side_menu.style.display = 'flex';
}
function close_menu() {
    side_menu.style.top = '-100%';
    nav_toggler.innerHTML = `<button type="button" onclick="expand()" id="expand">
    <i class="fa fa-bars"></i>
    </button> `
}