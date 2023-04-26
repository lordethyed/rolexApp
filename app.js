const  menuSliderData = {

}

const loading = document.querySelector(".loading");

window.addEventListener('load', function(){
    loading.classList.add('hide-loading');
    this.document.body.classList.add('body-loading-hide');
})

var firstPageVideo_scroll_treaker = false;



var firstPageVideo = document.querySelector('.first-page-video');

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    // if(scroll < 1500 && firstPageVideo_scroll_treaker == false){
    //     console.log(scroll);
    //     firstPageVideo_scroll_treaker = true;
    // }
    // else if(scroll < 3000 ){

    // }
});



function MyMenu() {
    var menuIcon = document.getElementById('menu-icon');
    var menuText = document.getElementById('menuText');
    var menuNavBarMenu = document.getElementById('navbar-menu');
    var menuNavBarTitle = document.querySelectorAll('.nav-item');

    console.log(menuNavBarTitle[0]);
    if(menuNavBarMenu.style.display == ''){
        menuNavBarMenu.style.display = 'flex';
        menuIcon.classList.replace('fa-bars-staggered', 'fa-xmark');
        menuText.textContent = 'Close';
    }
    else{
        menuNavBarMenu.style.display = '';
        menuIcon.classList.replace('fa-xmark', 'fa-bars-staggered');
        menuText.textContent = 'Menu';
    }
}