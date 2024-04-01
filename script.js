function loco(){
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

}
loco();

function cursor(){document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        top : dets.y,
        left: dets.x,
        // duration:1,
    })
})}
cursor();

function video(){
    gsap.to("#page1 video",{
        filter:"blur(20px)",
        transform:"scaleX(0.85)",
        scrollTrigger:{
            trigger : "video",
            scroller: "#main",
            scrub:true,
            start: "top 0",
            end: "top -50",   
        }
    })
}
video();

function navAnimation(){
    gsap.to("nav .part2",{
        y:-100,
        duration:1,
        scrollTrigger:{
            trigger:"nav",
            scroller:"#main",
            scrub:true,
            start: "top 0",
            end: "top -10%"
        }
    })
    
    gsap.to("nav i",{
        display: "initial",
        scrollTrigger :{
            trigger :"nav",
            scroller:"#main",
            start:"top -15",
            end:"top -20",
            scrub:true,
        }
    })
}
navAnimation();


function page2Animation(){

gsap.to("#page2  img",{
    transform : "translateY(-50%) translateX(69%)",
    duration:10,
    repeat:-1,
    ease:"none",
});

var tl = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        start:"top 70%",
        end: "top -100",
        // markers:true,
        scrub: 1
    }
})



tl.from("#left-page2",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani")
tl.from("#right-page2 heading",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani")
tl.from("#right-page2 p",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani")
tl.from("#right-page2 button",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani")


tl.from("#left-page2-content2 heading",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani2")

tl.from("#left-page2-content2 p",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani2")

tl.from("#left-page2-content2 button",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani2")

tl.from("#right-page2-content2 video",{
    y:200,
    opacity:0,
    duration:0.6,
    scale: 1.2
}, "ani2")

}
page2Animation();


function page3Animation(){
    gsap.from("#page3  #helmet",{
        rotationY:90,
        duration:3,
        transition: "all ease",
        // ease:"all",
        // repeat:2,
        ease:"none",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            start:"top 20%",
            end: "top 0%",
            // markers:true,
            scrub:true
        }
    })
    
    var tl2 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            start:"top -40%",
            end: "top -100%",
            // markers:true,
            scrub: true
        }
    })
    var tl21 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            start:"top -140%",
            end: "top -200%",
            // markers:true,
            scrub: true
        }
    })
    var tl22 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3",
            start:"top -170%",
            end: "top -220%",
            // markers:true,
            scrub: true
        }
    })
  
    
    
    tl2.from("#helmet-right-below-content h2",{
        y:200,
        opacity:0,
        duration:0.6,
        scale: 1.2
    })
    tl2.from("#helmet-right-below-content h5",{
        y:200,
        opacity:0,
        duration:0.4,
        scale: 1.2
    })
    tl2.from(".p3-btn1",{
        y:150,
        opacity:0,
        duration:0.6,
        scale: 1.2
    })
    tl2.from(".autodonning1",{
        y:200,
        opacity:0,
        duration:0.6,
        scale: 1.2
    })
    
    
    tl21.from(".auto-below1",{
        y:200,
        opacity:0,
        duration:0.6,
        scale: 1.2,
        // repeat:-1,
        // rotate: 360
    })
    
    tl21.from(".autodonning2",{
        y:200,
        opacity:0,
        duration:0.6,
        scale: 1.2
    })
    
    tl22.from(".auto-below2",{
        y:200,
        opacity:0,
        duration:0.6,
        scale: 1.2
    })
    
    }
    page3Animation();



function page4animations(){

    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:3,
            // markers:true,
            start: "top 0",
            end: "top -80%",
            pin:true
        }
    })
    
    tl4.to("#page4-content",{
        transform : "translateX(-60%)",
        duration: 1
    },"ani4")

    tl4.to("#slider-in",{
        x:740,
        duration: 1
    },"ani4")

 
    var tl41 = gsap.timeline({
        scrollTrigger:{
            trigger:"#info h1",
            scroller:"#main",
            scrub:true,
            // markers:true,
            start: "top 55%",
            end: "top 20%",
        }
    })
    
    tl41.from("#info h1",{
        y:400,
        duration:0.4,
        opacity:0,
        scale:1.2
    },"ani")
    tl41.from("#info h3",{
        y:400,
        duration:0.6,
        opacity:0,
        scale:1.2
    },"ani")
    tl41.from(".p4-btn1",{
        y:400,
        duration:0.5,
        opacity:0,
        scale:1.2
    },"ani")
    tl41.from(".p4-c1-box-img img",{
        y:400,
        duration:0.6,
        opacity:0,
        scale:1.2
    },"ani")
    tl41.from(".p4-under-content1 h1",{
        y:400,
        duration:0.6,
        opacity:0,
        scale:1.2
    },"ani")
    tl41.from(".p4-under-content1 p",{
        y:400,
        duration:0.6,
        opacity:0,
        scale:1.2
    },"ani")
}
page4animations();

function page5animation(){
        
    var tl5 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page5",
            start:"top 60%",
            end: "top 50%",
            // markers:true,
            scrub: 2
        }
    })
            
        
        tl5.from("#page5 h1",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl5.from("#page5-content1-left",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl5.from("#page5-content1-right",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        var tl5 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#page5-content2",
                start:"top 50%",
                end: "top 40%",
                // markers:true,
                scrub: 2
            }
        })
        tl5.from(".box1",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"ani")
      
        tl5.from(".box2",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"ani")
      
        tl5.from(".box3",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"ani")

        tl5.from(".p5-btn",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        
        
 
}

page5animation();

function page6animation(){
        
    var tl6 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page6",
            start:"top 60%",
            end: "top 50%",
            // markers:true,
            scrub: 2
        }
    })
            
        
        tl6.from("#page6-content1-left h1",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl6.from("#page6-content1-left h4",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl6.from("#page6-content1-right",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
 
      
        var tl6 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#p6-c2",
                start:"top 50%",
                end: "top 30%",
                // markers:true,
                scrub: 2
            }
        })
        tl6.from(".p6-c2-l-div",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl6.from(".p6-c2-r-div",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        tl6.from(".p6-btn",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })

        var tl6 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#p6-c3",
                start:"top 50%",
                end: "top -40%",
                // markers:true,
                scrub: 2
            }
        })
        tl6.from("#p6-c3-l h3",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"prem")
        tl6.from("#p6-c3-r h3",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"prem")
        tl6.from("#p6-c3-r p",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"prem")
}

page6animation();

function page7animation(){

    var tl7 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page7",
            start:"top 60%",
            end: "top 50%",
            // markers:true,
            scrub: 2
        }
    })
            
        
        tl7.from("#t-c1",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#t-c2",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#t-c3",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#t-c4",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#t-c5",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })

        var tl71 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#p7-c2",
                start:"top 60%",
                end: "top 50%",
                // markers:true,
                scrub: 2
            }
        })


        tl7.from("#p7-c2-l-l h2",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#p7-c2-l-l h4",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
        tl7.from("#p7-c2-l-p",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"p7")
        tl7.from("#p7-c2-l-r",{
            x:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"p7")


        var tl71 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#p7-c3",
                start:"top 60%",
                end: "top 50%",
                // markers:true,
                scrub: 2
            }
        })

        tl71.from("#p7-c3 imgs img",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        tl71.from("#p7-c3-flex-l",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"p71")
      
        tl71.from("#p7-c3-flex-r video",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        },"p71")


        var tl72 = gsap.timeline({
            scrollTrigger:{
                scroller:"#main",
                trigger:"#p7-c4",
                start:"top 60%",
                end: "top 50%",
                // markers:true,
                scrub: 2
            }
        })

        tl72.from("#p7-c4-flex-1-l",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        tl72.from("#p7-c4-flex-1-r",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
        tl72.from("#p7-c4-flex-2 p",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })

        tl72.from("#p7-c4-flex-3 button",{
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
      
}
page7animation();

function page8animation(){
    var tl7 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page8",
            start:"top 60%",
            end: "top 50%",
            // markers:true,
            scrub: 2
        }
    })
            
        
        tl7.from("#p8-flex-l-part h2",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })

        tl7.from("#p8-flex-l-part p",{
            y:200,
            opacity:0,
            duration:0.6,
            scale: 1.2
        })
}
page8animation()


//page one written text 

var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector("#page1 h1")
h1Text.innerHTML = clutter



gsap.to("#page1 h1 span",{
    display:"initial",
    stagger:0.1
})

// -----------------------------------------------------

// function showMessage(message, timeout) {
//     var messageElement = document.getElementById('message');
//     messageElement.innerText = message;
//     messageElement.style.display = 'block';

//     // Hide the message after timeout milliseconds
//     setTimeout(function() {
//       messageElement.style.display = 'inline';
//     }, timeout);
//   }

//   // Display the message for 3 seconds
//   showMessage("text", 3000);

let x = document.getElementById("txt");
setTimeout(function(){ x.value="2 seconds" }, 2000);
setTimeout(function(){ x.value="4 seconds" }, 4000);
setTimeout(function(){ x.value="6 seconds" }, 6000);

