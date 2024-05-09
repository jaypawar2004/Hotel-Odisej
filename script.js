// var tl = gsap.timeline()

// tl.from("#page1 svg",{
//          y:-40,
//         duration:1,
//         opacity:0,
//         delay:0.5
//     })
// tl.to("#page1 img",{
    
// })
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline();
// tl.from("#page1 svg", {
//   y: -40,
//   opacity: 0,
//   delay: 0.3,
//   duration: 0.7,
// })
  tl.from("#page1 img", {
    scale: 0.5,
    delay: -0.1,
    duration: 1.2,
    // ease:Power4,
    ease: Power4.easeOut,
    borderRadius: "10px",
  })
  // .from("#nav", {
  //   y: -50,
  //   opacity: 0,
  //   delay: -0.4,
  //   duration: 0.5,
  // });

var h2data = document.querySelectorAll("#page2 h2, #page3 #text-2 h2, #page6 h1, #page7 h1, #page10 h1");
h2data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "#main",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
  },
});

gsap.to("#page3 h2 span", {
  color: "#434B34",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page3 h2 span",
    scroller: "#main",
    start: "top 80%",
    // markers:true,
    end: "top 60%",
    scrub: 2,
  },
});

gsap.to("#page2 #svg2,#page2 #svg3",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page2 #svg2",
    scroller:"#main",
    // markers:true,
    scrub:2,
  }
})

gsap.from("#pg3-text, #pg3-pto, .img1, .img2",{
  y:100,
  stagger:0.3,
  opacity:0,
  delay:0.7,
  scrollTrigger:{
    trigger:"#pg3",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 10%",
    scrub:2,
    opacity:1,

  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.to("#page6 #svg4,#page6 #svg5",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page6 #svg4",
    scroller:"#main",
    // markers:true,
    scrub:2,
  }
})
gsap.to("#page6 #svg6,#page6 #svg7",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page6 #svg6",
    scroller:"#main",
    // markers:true,
    scrub:2,
  }
})
gsap.to("#page10 #svg8,#page10 #svg9",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page10 #svg8",
    scroller:"#main",
    // markers:true,
    scrub:2,
  }
})

gsap.to("#page6 h1 span", {
  color: "#E3E3C4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page6 h1 span",
    scroller: "#main",
    start: "top 80%",
    // markers:true,
    end: "top 60%",
    scrub: 2,
  },
});
gsap.to("#page7 h1 span", {
  color: "#434B34",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page7 h1 span",
    scroller: "#main",
    start: "top 80%",
    // markers:true,
    end: "top 10%",
    scrub: 2,
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 2,
  },
});
tl2.to("#page8-left", {
  transform: `translateX(-40%)`,
  duration: 1,
},"page8-anim");
tl2.to("#page8-right", {
  transform: `translateX(40%)`,
  duration: 1,
},"page8-anim");
tl2.from("#page8-center", {
  transform: `translateY(10%)`,
  duration: 1,
  opacity:0,
},"page8-anim");

gsap.to("#page10 h1 span", {
  color: "#E3E3C4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page10 h1 span",
    scroller: "#main",
    start: "top 80%",
    // markers:true,
    end: "top 10%",
    scrub: 2,
  },
});
var tl5 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page10",
    start:"top 40%",
    // markers:true,
    end:"top 20%",
    scrub:1.5,
    opacity:1,
  }
})

tl5.from(" #pg10-center, #pg10-right",{
  y:400,
  opacity:0,
  })

  gsap.from("#pg10-left",{
    y:400,
    opacity:0,
    scrollTrigger:{
      trigger:"#page10",
      scroller:"#main",
      // markers:true,
      start:"top -15%",
      end:"top -20%",
      opacity: 1,
      scrub:2
    }
  })

  gsap.from("#page10>h4",{
    y:400,
    opacity:0,
    scrollTrigger:{
      trigger:"#page10",
      scroller:"#main",
      // markers:true,
      start:"top -95%",
      end:"top 10%",
      opacity: 1,
      scrub:2
    }
  })
  gsap.from("#page11>h1, #page11>p, #pg11-left, #pg11-right h1, #pg11-right p, #pg11-right h2",{
    y:200,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#page11",
      scroller:"#main",
      // markers:true,
      start:"top 75%",
      end:"top 10%",
      opacity: 1,
      scrub:2
    }
  })
  gsap.from("#pg11-right2, #pg11-left2 h1,#pg11-left2 h2, #pg11-left2 p,#pg11-right2 ",{
    y:200,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#pg11-second",
      scroller:"#main",
      // markers:true,
      start:"top 95%",
      end:"top 10%",
      opacity: 1,
      scrub:2,
      
    }
  })
  gsap.from("#pg12-last",{
    y:200,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#page12",
      scroller:"#main",
      // markers:true,
      start:"top 0%",
      end:"top -10%",
      opacity: 1,
      scrub:2
    }
  })

//   ScrollTrigger.refresh();
//   document.addEventListener("wheel",function(dets){
    
//     if(dets.deltaY > 600){
//       if(dets.deltaY > 0){
//         gsap.to("#nav",{
//           top:"-100px",
//           duration:0.3,
//           ease:Power0.easeNone
//         })
//       }

//     }
//     if(dets.deltaY < 0){
//       gsap.to("#nav",{
//         top:"0px",
//         duration:0.3,
//         ease:Power0.easeNone
//       })
//     }
//   })();
  
//  gsap.to("#nav svg",{
//   transform:`translateY(0%) scale (0.15)`,
//   ease: Power0.easeNone,
//   scrollTrigger:{
// trigger:"#nav",
// scroller:"#main",
// markers:true,
// start:"top -2%",
// end:"top -10%",
// scrub:1,
//   },
//  })