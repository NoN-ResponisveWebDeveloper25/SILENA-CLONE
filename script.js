function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:0.6,
  lerp:0.02,
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
 });
 
 
 
 
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
 
 
 
 
 }
  locoscroll()


  var img=document.querySelectorAll(".imgfirst")




  img.forEach(function(elem){
    gsap.from(elem,{
      clipPath: "circle(100% at 50% 50%)",
   scrollTrigger:{
     trigger:elem,
     scroller:".main",
     start:"top 0%",
     end:"top -90%",
     pin:true,
      // markers:true,
     scrub:2,
   }
   })
  })




  gsap.to(".companylogo>img",{
    scale:0,
    opacity:0,
 scrollTrigger:{
   trigger:".one",
   scroller:".main",
   start:"top 0%",
   end:"top -5%",
  //  pin:true,
    //  markers:true,
   scrub:2,
 }
 })

  

  var lefttrigger=document.querySelectorAll(".lefttrigger")

lefttrigger.forEach(function(elem){
  gsap.from(elem,{
    opacity:0,
    y:100,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 40%",
   end:"top 35%",
  // markers:true,
   scrub:3,
 }
 })
})
 

var righttrigger=document.querySelectorAll(".righttrigger")

righttrigger.forEach(function(elem){
  gsap.from(elem,{
    opacity:0,
    y:100,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 30%",
   end:"top 25%",
  //  markers:true,
   scrub:2,
 }
 })

})




 
 var gola=document.querySelectorAll(".gola")

 

gola.forEach(function(elem){

  gsap.from(elem,{
    opacity:0,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 25%",
   end:"top 23%",
  
  //  markers:true,
   scrub:2,
 }
 })
})





gsap.to(".pagethreeoverlay>img",{
  clipPath: "circle(100% at 50% 50%)",
scrollTrigger:{
 trigger:".pagethree",
 scroller:".main",
 start:"top -100%",
 end:"top -200%",
 pin:true,
 // markers:true,
 scrub:2,
}
})




// gsap.to(".pageoverlap-top",{
 
// scrollTrigger:{
//  trigger:".pageoverlap",
//  scroller:".main",
//  start:"top 0%",
//  end:"top -100%",
//  pin:".pageoverlap-top",
//  markers:true,
//  scrub:2,
// }
// })


// gsap.to(".pageoverlap-bottom",{
//   top:"-10%",
 
//   scrollTrigger:{
//    trigger:".pageoverlap-bottom",
//    scroller:".main",
//    start:"top 100%",
//    end:"top -100%",
   
//     markers:true,
//    scrub:2,
//   }
//   })





gsap.to(".pagezoom-top>svg",{

  scale:200,

scrollTrigger:{
 trigger:".pagezoom",
 scroller:".main",
 start:"top 0%",
 end:"top -100%",
 pin:".pagezoom",
//  markers:true,
 scrub:1,
}

}
)


gsap.from(".come",{

  scale:0,
  opacity:0,

scrollTrigger:{
 trigger:".come",
 scroller:".main",
 start:"top 0%",
 end:"top -10%",

//  markers:true,
 scrub:2,
}

}
)



gsap.from(".htwo",{

  y:100,
  opacity:0,

scrollTrigger:{
 trigger:".htwo",
 scroller:".main",
 start:"top 0%",
 end:"top -10%",

//  markers:true,
 scrub:2,
}

}
)

var img=document.querySelectorAll(".imgfirstnew")


  

  img.forEach(function(elem){
    gsap.from(elem,{
      clipPath: "circle(100% at 50% 50%)",
   scrollTrigger:{
     trigger:elem,
     scroller:".main",
     start:"top 0%",
     end:"top -90%",
     pin:true,
      // markers:true,
     scrub:2,
   }
   })
  })

  

  var lefttrigger=document.querySelectorAll(".lefttriggernew")

lefttrigger.forEach(function(elem){
  gsap.from(elem,{
    opacity:0,
    y:100,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 40%",
   end:"top 35%",
  // markers:true,
   scrub:2,
 }
 })
})
 

var righttrigger=document.querySelectorAll(".righttriggernew")

righttrigger.forEach(function(elem){
  gsap.from(elem,{
    opacity:0,
    y:100,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 30%",
   end:"top 25%",
  //  markers:true,
   scrub:2,
 }
 })

})




 
 var gola=document.querySelectorAll(".golanew")

 

gola.forEach(function(elem){

  gsap.from(elem,{
    opacity:0,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 25%",
   end:"top 23%",
  
  //  markers:true,
   scrub:2,
 }
 })
})









gsap.to(".pagezoomnew-top>svg",{

  scale:200,

scrollTrigger:{
 trigger:".pagezoomnew",
 scroller:".main",
 start:"top 0%",
 end:"top -100%",
 pin:".pagezoomnew",
//  markers:true,
 scrub:1,
}

}
)


gsap.from(".spaun",{

  
  opacity:0,
  scale:0,
  y:100,

scrollTrigger:{
 trigger:".spaun",
 scroller:".main",
 start:"top 0%",
 end:"top -10%",

//  markers:true,
 scrub:2,
}

}
)



gsap.from(".spauntwo",{

  y:100,
  opacity:0,

scrollTrigger:{
 trigger:".spaun",
 scroller:".main",
 start:"top 0%",
 end:"top -10%",

//  markers:true,
 scrub:2,
}

}
)
 

gsap.from(".spaunthree",{

  y:100,
  opacity:0,

scrollTrigger:{
 trigger:".spaun",
 scroller:".main",
 start:"top 0%",
 end:"top -10%",

//  markers:true,
 scrub:2,
}

}
)
 

var lineone=document.querySelector(".lineone")
var linetwo=document.querySelector(".linetwo")
var linethree=document.querySelector(".linethree")
var linefour=document.querySelector(".linefour")



lineone.addEventListener("click",()=>{
  
  document.querySelector(".photochange").style.backgroundImage="url(https://additive.imgix.net/m/e/d/mediaservice/d/a/d/dada3a89513ed942d25aa33ce1d9cd6d?auto=format&fit=crop&h=800&q=90&w=800)"
  document.querySelector(".boxchange>h1").innerHTML="YOGA, BABY!"
  document.querySelector(".details>p").innerHTML="21.01.2023 - 01.05.2024"
  document.querySelector(".details>h4").innerHTML="PACKAGE PRICE 192€"
  




})




linetwo.addEventListener("click",()=>{
  
  document.querySelector(".photochange").style.backgroundImage="url(https://additive.imgix.net/m/e/d/mediaservice/d/a/d/dada3a89513ed942d25aa33ce1d9cd6d?auto=format&fit=crop&h=800&q=90&w=800)"
  document.querySelector(".boxchange>h1").innerHTML="HONEYMOON - RELAX AND SIT <br> BACK"
  document.querySelector(".details>p").innerHTML="21.01.2023 - 01.05.2024"
  document.querySelector(".details>h4").innerHTML="PACKAGE PRICE 135€"




})



linethree.addEventListener("click",()=>{
  document.querySelector(".photochange").style.backgroundImage="url(https://additive.imgix.net/m/e/d/mediaservice/a/a/7/aa7b9724af54a6e33c3325de53e6c2d3?auto=format&fit=crop&h=800&q=90&w=800)"
  document.querySelector(".boxchange>h1").innerHTML="HONEYMOON - I'M YOUR  YIN AND <br> YOU'RE MY YANG"
  document.querySelector(".details>p").innerHTML="21.04.2023 - 01.05.2024"
  document.querySelector(".details>h4").innerHTML="PACKAGE PRICE 430€"




})


linefour.addEventListener("click",()=>{
  document.querySelector(".photochange").style.backgroundImage="url(https://additive.imgix.net/m/e/d/mediaservice/2/1/c/21cd30f53d5df1012834764f5351e8f1?auto=format&crop=focalpoint&fit=crop&fp-x=0.63202527046192&fp-y=0.58998875140607&h=800&q=90&w=800)"
  document.querySelector(".boxchange>h1").innerHTML="BABYMOON @ SILENA"
  document.querySelector(".details>p").innerHTML="21.04.2023 - 01.05.2024"
  document.querySelector(".details>h4").innerHTML="PACKAGE PRICE 392€"




})




var hover=document.querySelectorAll(".hovercircle")
console.log(hover)

hover.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
    elem.style.transform="scale(2.6)"
    
  
  })


})



hover.forEach(function(elem){

  elem.addEventListener("mouseleave",function(){
    elem.style.transform="scale(1)"
    
  
  })


})



 
 


    