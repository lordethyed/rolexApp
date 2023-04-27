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

const loading = document.querySelector(".loading");

window.addEventListener('load', function(){
    loading.classList.add('hide-loading');
    this.document.body.classList.add('body-loading-hide');
})


function blackAndWhite(){
    var icon = document.getElementById('blackAndWhite');
    var texts = document.querySelectorAll('.text');
    var firstScreen = document.querySelector('.firstScreen')
    if(icon.classList.contains('fa-moon')){
        // texts.forEach.style.console = 'white';
        firstScreen.style.backgroundColor = 'black';
        icon.classList.replace('fa-moon', 'fa-sun');
        icon.style.color = 'white';
        texts.forEach((element) => {
            element.style.color = 'white';
        });
    }
    else{
        // texts.forEach.style.console = 'black';
        firstScreen.style.backgroundColor = 'white';
        icon.style.color = 'black';
        texts.forEach((element) => {
            element.style.color = 'black';
        });
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

function sliderMySliderRight(){
    var first = document.getElementById('first-slider');
    var second = document.getElementById('second-slider');
    var third = document.getElementById('third-slider');
    var fourth = document.getElementById('fourth-slider');
}


function visible(target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom >  500 + windowPosition.top && 
      targetPosition.top  < windowPosition.bottom && 
      targetPosition.right > windowPosition.left && 
      targetPosition.left < windowPosition.right) {
          return true;
    } else {
      return false;
    };
  };


var secondScreen = document.querySelector('.secondScreen');
var secondScreenH2 = document.querySelector('.secondScreenH2');

window.addEventListener("scroll", (event) => {
    if(visible(secondScreen)){
        secondScreenH2.classList.add('titileSecondPage-scroll-animation');
    }
    else if(!visible(secondScreen)){
        secondScreenH2.classList.remove('titileSecondPage-scroll-animation');
    }
}
);

