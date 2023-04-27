const  menuSliderData = {

}

const loading = document.querySelector(".loading");

window.addEventListener('load', function(){
    loading.classList.add('hide-loading');
    this.document.body.classList.add('body-loading-hide');
})


var firstPageVideo = document.querySelector('.first-page-video');
var titleText = document.querySelector('.title');
var cardInVideo = document.querySelector('.card-in-video');
var cardInVideoH2 = document.querySelector('.card-in-video h2');
var cardInVideoP = document.querySelector('.card-in-video p');
var mainPartImg = document.querySelector('.main-part-img');
var mainPartText = document.querySelector('.main-part-text');


function mainPartImgVideoMaker(scroll) {
    formula = Math.round(Math.sqrt(scroll - 2200));
    if (scroll < 2200 || scroll > 3500){
        document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 1 + '.png'
    }
    else{
    document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + formula + '.png'
    }
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

function visibleVideo(target) {
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
  
    if (targetPosition.bottom > windowPosition.top && 
      targetPosition.top  < windowPosition.bottom && 
      targetPosition.right > windowPosition.left && 
      targetPosition.left < windowPosition.right) {
          return true;
    } else {
      return false;
    };
  };

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let widthDevice = document.documentElement.clientWidth;
    let hightDevcie = document.documentElement.clientHeight;
    let ratio = hightDevcie / widthDevice;
    if(!visible(titleText)){
        titleText.classList.add('title-opacity-scrolling');
    }
    else if(visible(titleText)){
        titleText.classList.remove('title-opacity-scrolling');
    }
    if(visible(cardInVideo)){
        cardInVideoH2.classList.add('card-in-video-h2-animation');
        cardInVideoP.classList.add('card-in-video-p-animation');
    }
    else if(!visible(cardInVideo)){
        cardInVideoH2.classList.remove('card-in-video-h2-animation');
        cardInVideoP.classList.remove('card-in-video-p-animation');
    }
    if(visible(mainPartImg)){
        mainPartImg.classList.add('main-part-img-scroll-animation');
        mainPartImgVideoMaker(scroll);
        // mainPartText.classList.add('main-part-text-scroll-animated');
            // if(scroll >= 2100 && scroll >= 2300){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 2 + '.png'
            // }
            // else if(scroll >= 2300){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 3 + '.png'
            // }
            // else if(scroll >= 2500){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 4 + '.png'
            // }
            // else if(scroll >= 2700){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 5 + '.png'
            // }
            // else if(scroll >= 2800){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 6 + '.png'
            // }
            // else if(scroll >= 3000){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 7 + '.png'
            // }
            // else if(scroll >= 3300){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 8 + '.png'
            // }
            // else if(scroll >= 3500){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 9 + '.png'
            // }
            // else if(scroll >= 3700){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 10 + '.png'
            // }
            // else if(scroll >= 3900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 11 + '.png'
            // }
            // else if(scroll >= 4100){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 12 + '.png'
            // }
            // else if(scroll >= 4300){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 13 + '.png'
            // }
            // else if(scroll >= 4700){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 14 + '.png'
            // }
            // else if(scroll >= 5000){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 15 + '.png'
            // }
            // else if(scroll >= 5300){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 16 + '.png'
            // }
            // else if(scroll >= 5600){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 17 + '.png'
            // }
            // else if(scroll >= 5900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 18 + '.png'
            // }
            // else if(scroll >= 6100){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 19 + '.png'
            // }
            // else if(scroll >= 6200){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 20 + '.png'
            // }
            // else if(scroll >= 6500){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 21 + '.png'
            // }
            // else if(scroll >= 6700){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 22 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 23 + '.png'
            // }
            // else if(scroll >= 7100){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 24 + '.png'
            // }
            // else if(scroll >= 7400){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 25 + '.png'
            // }
            // else if(scroll >= 7900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 26 + '.png'
            // }
            // else if(scroll >= 8100){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 27 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 28 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 29 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 23 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 23 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 23 + '.png'
            // }
            // else if(scroll >= 6900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 23 + '.png'
            // }

            
            // else if(scroll <= 2500){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 2 + '.png'
            // }
            // else if(scroll <= 2700){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 3 + '.png'
            // }
            // else if(scroll <= 2900){
            //     document.getElementById('main-part-img').src = 'images/mainPageRolexVideo/' + 4 + '.png'
            // }
    }
    else if(visibleVideo(firstPageVideo)){
        console.clear();
        mainPartImg.classList.remove('main-part-img-scroll-animation');
    }
}
  


    // console.log(ratio);
    // if(ratio > 0.5){
    //     if(scroll <= 300 && scroll < 700){
    //         titleText.classList.remove('title-opacity-scrolling');
    //         cardInVideoH2.classList.remove('card-in-video-h2-animation');
    //         cardInVideoP.classList.remove('card-in-video-p-animation');
    //     }
    //     if(scroll >= 700 && scroll < 1200){
    //         titleText.classList.add('title-opacity-scrolling');
    //         cardInVideoH2.classList.add('card-in-video-h2-animation');
    //         cardInVideoP.classList.add('card-in-video-p-animation');
    //         firstPageVideo.classList.remove('.first-page-video-scroll-animation');
    //     }
    //     else if(scroll >= 1200){
    //         titleText.classList.remove('title-opacity-scrolling');
    //         cardInVideoH2.classList.remove('card-in-video-h2-animation');
    //         cardInVideoP.classList.remove('card-in-video-p-animation');
    //         firstPageVideo.classList.add('.first-page-video-scroll-animation');
    //     }
    // }
    // else if(ratio < 0.5){
    //     if(scroll <= 50 && scroll < 200){
    //         titleText.classList.remove('title-opacity-scrolling');
    //         cardInVideoH2.classList.remove('card-in-video-h2-animation');
    //         cardInVideoP.classList.remove('card-in-video-p-animation');
    //     }
    //     if(scroll >= 200 && scroll < 700){
    //         titleText.classList.add('title-opacity-scrolling');
    //         cardInVideoH2.classList.add('card-in-video-h2-animation');
    //         cardInVideoP.classList.add('card-in-video-p-animation');
    //         firstPageVideo.classList.remove('.first-page-video-scroll-animation');
    //     }
    //     else if(scroll >= 700){
    //         titleText.classList.remove('title-opacity-scrolling');
    //         cardInVideoH2.classList.remove('card-in-video-h2-animation');
    //         cardInVideoP.classList.remove('card-in-video-p-animation');
    //         firstPageVideo.classList.add('.first-page-video-scroll-animation');
    //     }
    //     else if(scroll >= 2300){
    //         mainPartImg.classList.add('main-part-img');
    //         console.log(mainPartImg);
    //     }
    // }
    // }
);



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