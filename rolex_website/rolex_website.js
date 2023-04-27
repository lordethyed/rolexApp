gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/* ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
}) */

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
}


gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'centre',
        end: '850',
        scrub: true
    }
})

gsap.fromTo('.gallery-left .gallery-item', { x:-300, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.gallery-item',
        scrub: true
    }
})



let itemsL = gsap.utils.toArray('.gallery-left .gallery-item')
itemsL.forEach(item => {
    gsap.fromTo(item, { x:-300, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.gallery-item',
            scrub: true
        }
    })
})
gsap.fromTo('.gallery-right .gallery-item', { x:300, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.gallery-item',
        scrub: true
    }
})



let itemsR = gsap.utils.toArray('.gallery-right .gallery-item')
itemsR.forEach(item => {
    gsap.fromTo(item, { x: 300, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.gallery-item',
            scrub: true
        }
    })
})





const liItem = document.querySelectorAll('ul li');
        const imgItem = document.querySelectorAll('.gallery-item');

        liItem.forEach(li => {
           li.onclick = function() {
            //active
            liItem.forEach(li => {
                li.className = "";
            })
            li.className = "active";

            //Filter
            const value = li.textContent;
            imgItem.forEach(img => {
                img.style.display = 'none';
                if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                    img.style.display = 'block';
                }
            })
           }
        });




var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    }
}