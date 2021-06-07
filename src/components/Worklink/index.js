import React from "react";
import { Link } from "react-router-dom";


let prevRatio = 0.0;

let prvImgElement;
let workTitleElement;

let mq = window.matchMedia("(max-width: 768px)");
let increasingOpacity = "ratio";
let decreasingOpacity = "ratio";
let prvObserver;
let titleObserver;

prvImgElement = document.querySelectorAll(".prv");
workTitleElement = document.querySelectorAll(".middle");

// Window width is at less than 768px
if (mq.matches) {

  scrollerHover();
  console.log("mobile load - worklink/index.js")

}
else { }
// Fired if window width has changed
mq.addEventListener( "change", (e) => {
    if (e.matches) {
        console.log('Calling scrollerHover from page change - worklink/idex.js')
        scrollerHover();
        
    } else { 
        
      // removeObservers();  
      
      document.addEventListener('scroll', function() {
        prvImgElement.forEach(prvImgElements => {
            prvImgElements.style.opacity = 1
        });
      // },{
      //   once: true,
      });
      
    }
})

function scrollerHover () {
    
  window.addEventListener("scroll", (event) => {createObservers();}, false);
    
  document.addEventListener('scroll', function() {
    prvImgElement.forEach(prvImgElements => {
        prvImgElements.style.opacity = .3
    });
  // },{
  //   once: true,
  });
  
}
  
function createObservers() {
  
    let options = {
      rootMargin: "-160px 0px",
      threshold: buildThresholdList()
    };

    let titleOptions = {
      rootMargin: "-210px 0px",
      threshold: buildThresholdList()
    };
  
    prvObserver = new IntersectionObserver(handleIntersect, options);
    // console.log(prvObserver)
    prvImgElement.forEach(prvImgElements => {
        prvObserver.observe(prvImgElements);
    });
    
    titleObserver = new IntersectionObserver(handleTitleIntersect, titleOptions);
    // console.log(titleObserver)
    workTitleElement.forEach(workTitleElements => {
        titleObserver.observe(workTitleElements);
    });

}

// function removeObservers() {
   
//     if (prvObserver !== undefined) {
        
//         prvImgElement.forEach(prvImgElements => {
//             prvObserver.unobserve(prvImgElements);
//         });
        
//         workTitleElement.forEach(workTitleElements => {
//             titleObserver.unobserve(workTitleElements);
//         });

//     }
// }

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 25;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        let invRatio = 1 - entry.intersectionRatio

        if (invRatio > .28)  {

        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.opacity = increasingOpacity.replace("ratio", invRatio);
        } else {
            entry.target.style.opacity = decreasingOpacity.replace("ratio", invRatio);
        }
            
      }
      prevRatio = entry.intersectionRatio;
    });
}

function handleTitleIntersect(entries, observer) {
    entries.forEach((entry) => {
        let regRatio = entry.intersectionRatio
        
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.opacity = increasingOpacity.replace("ratio", regRatio);
        } else {
            entry.target.style.opacity = decreasingOpacity.replace("ratio", regRatio);
        }    
        prevRatio = entry.intersectionRatio;

    });
}

function Worklink(props) {
  return (
    <>
      <div className="col-md-4 col-12 worklink">
        <Link
              to={props.href}
              className={window.location.pathname === "/work/id" ? "nav-link active " : "nav-link"}
            >
          <img
            className="rounded prv img-fluid"
            src={props.src}
            alt={props.alt}
          />
          <div className="middle">
            <h3 className="worktitle">{props.title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Worklink;
