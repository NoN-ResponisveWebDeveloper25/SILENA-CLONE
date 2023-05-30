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


  console.log(img);

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

  

  var lefttrigger=document.querySelectorAll(".lefttrigger")

lefttrigger.forEach(function(elem){
  gsap.from(elem,{
    opacity:0,
    y:100,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 40%",
   end:"top 30%",
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
   end:"top 20%",
  //  markers:true,
   scrub:2,
 }
 })

})




 
 var gola=document.querySelectorAll(".gola")

 
console.log(gola)

gola.forEach(function(elem){

  gsap.from(elem,{
    opacity:0,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 25%",
   end:"top 20%",
  
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


  console.log(img);

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
   end:"top 30%",
  // markers:true,
   scrub:3,
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
   end:"top 20%",
  //  markers:true,
   scrub:2,
 }
 })

})




 
 var gola=document.querySelectorAll(".golanew")

 
console.log(gola)

gola.forEach(function(elem){

  gsap.from(elem,{
    opacity:0,
 scrollTrigger:{
   trigger:elem,
   scroller:".main",
   start:"top 25%",
   end:"top 20%",
  
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
 



 
 


    