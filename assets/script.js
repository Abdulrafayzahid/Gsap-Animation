


var hero = document.querySelector(".hero");
var slider = document.querySelector(".slider");
var logo = document.querySelector("#logo");
var headline = document.querySelector(".headline");
var section2 = document.querySelector(".animaMate");
var sectione = document.querySelector(".h111");
var controller = new ScrollMagic.Controller;

var anmateScroll = new TimelineMax();


var tl = new TimelineMax();

tl.fromTo(hero, 1, {height: '0%'}, {height: '80%',ease: Power2.easeInOut})
.fromTo(hero, 1, { width:'100%'}, {width:'80%', ease: Power2.easeInOut});

tl.fromTo(slider, 1, { x:'-100%'},{x:'0%', ease: Power2.easeInOut},"-=1");
tl.fromTo(logo, 1, { x:-30, opacity: 0},{x:0, opacity: 1, ease: Power2.easeInOut},"-=0.5");
tl.fromTo(headline, 1, { y:30, opacity: 0},{y:0, opacity: 1, ease: Power2.easeInOut},"-=0.5");

anmateScroll.fromTo(section2, 1, {
    opacity:0
},
{
   opacity: 1,
    ease:Power4.easeInOut
}).fromTo(sectione, 1, { y:30, opacity: 0},{y:0, opacity: 1, ease: Power2.easeInOut});
// anmateScroll.fromTo(sectione, 1, { y:30, opacity: 0},{y:0, opacity: 1, ease: Power2.easeInOut},"-=0.5");

// new ScrollMagic.Scene({
//     triggerElement: ".headline",
//     triggerHook: 0.5
// }).setTween(tl)
// .addIndicators().addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".animaMate",
    triggerHook: 0.65
}).setTween(anmateScroll)
.addIndicators().addTo(controller)



