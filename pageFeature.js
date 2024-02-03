var cursorMove = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (cursorPoss) {
  cursorMove.style.left = cursorPoss.x - 8 + "px";
  cursorMove.style.top = cursorPoss.y - 6 + "px";
  cursorBlur.style.left = cursorPoss.x - 250 + "px";
  cursorBlur.style.top = cursorPoss.y - 250 + "px";

});


var navBAr = document.querySelectorAll("#nav h4");          // Make cursor appreance round when enter nav tabs

  navBAr.forEach(function (navTabs) {
  
    navTabs.addEventListener("mouseenter", function() {
      cursorMove.style.scale = 3;
      cursorMove.style.border = "1px solid #fff";
      cursorMove.style.backgroundColor = "transparent";
    });
    navTabs.addEventListener("mouseleave", function(){
      cursorMove.style.scale = 1;
      cursorMove.style.border = "0px solid #dd850b";
      cursorMove.style.backgroundColor = "dd850b";
  })
});



gsap.to("#nav", {
    backgroundColor: "#111111",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
      trigger: "#nav",              // target that triggers due to scroll of tags.
      scroller: "body",            // on scrolling body it trigger target
    //   markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,                     // for occurance one by one.
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
});
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
});


gsap.from(".elementt", {
  scale: 1.2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers:true,
    start: "top 95%",
    end: "top 70%",
    scrub: 8,
  },
});


gsap.from("#page1Down h1", {
  y: -100,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers:true,
    start: "top 125%",
    end: "top 70%",
    scrub: 5,
  },
});
gsap.from("#page2 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 120,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#cards-container", {
  scale: 1.3,
  // opacity: 0,
  duration: 7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: false,
    start: "top 75%",
    end: "top 45%",
    scrub: 1.5,
  },
  onComplete: function () {
    gsap.to(".card", {
      rotate3d: { x: 5, y: 5, z: 5, a: 18 },
      duration: 5,
      stagger: 1.1,
    });
  },
});
