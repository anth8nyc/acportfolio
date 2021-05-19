import React from "react";
import Worklink from "../components/Worklink"
import moonphaserdemo from "../components/images/projectpreviews/moonphaserdemo.png"
import weatherapp from "../components/images/projectpreviews/weatherapp.png"
import schedulerdem from "../components/images/projectpreviews/schedulerdem.png"
import quizami from "../components/images/projectpreviews/quizami.png"
import userdirect from "../components/images/projectpreviews/userdirect.png"
import fittrackdem from "../components/images/projectpreviews/fittrackdem.png"

// const numSteps = 25.0;
// let prevRatio = 0.0;

// let prvImgElement;
// let workTitleElement;

// let mq = window.matchMedia("(max-width: 768px)");
// let increasingOpacity = "ratio";
// let decreasingOpacity = "ratio";
// let prvObserver;
// let titleObserver;

// prvImgElement = document.querySelectorAll(".prv");
// workTitleElement = document.querySelectorAll(".middle");

// // Window width is at less than 768px
// if (mq.matches) {

//     scrollerHover();
// }
// else { }
// // Fired if window width has changed
// mq.addEventListener( "change", (e) => {
//     if (e.matches) {
//         console.log('Calling scrollerHover')
//         scrollerHover();
        
//     } else { 
        
//         removeObservers();

//         document.addEventListener('scroll', function(e){
//           if(e.currentTarget.dataset.triggered) return;
//           e.currentTarget.dataset.triggered = true;
//           prvImgElement.forEach(prvImgElements => {
//             prvImgElements.style.opacity = 1
//         });
//       })

//     }
// })

// function scrollerHover () {
    
//     window.addEventListener("scroll", (event) => {createObservers();}, false);
    
    
//     document.addEventListener('scroll', function(e){
//       if(e.currentTarget.dataset.triggered) return;
//       e.currentTarget.dataset.triggered = true;
//       prvImgElement.forEach(prvImgElements => {
//         prvImgElements.style.opacity = .3
//     });
//   })
    
// }
  
// function createObservers() {
  
//     let options = {
//       rootMargin: "-160px 0px",
//       threshold: buildThresholdList()
//     };

//     let titleOptions = {
//       rootMargin: "-210px 0px",
//       threshold: buildThresholdList()
//     };
  
//     prvObserver = new IntersectionObserver(handleIntersect, options);
//     console.log(prvObserver)
//     prvImgElement.forEach(prvImgElements => {
//         prvObserver.observe(prvImgElements);
//     });
    
//     titleObserver = new IntersectionObserver(handleTitleIntersect, titleOptions);
//     console.log(titleObserver)
//     workTitleElement.forEach(workTitleElements => {
//         titleObserver.observe(workTitleElements);
//     });

// }

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

// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 25;
  
//     for (let i=1.0; i<=numSteps; i++) {
//       let ratio = i/numSteps;
//       thresholds.push(ratio);
//     }
  
//     thresholds.push(0);
//     return thresholds;
// }

// function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//         let invRatio = 1 - entry.intersectionRatio

//         if (invRatio > .28)  {

//         if (entry.intersectionRatio > prevRatio) {
//             entry.target.style.opacity = increasingOpacity.replace("ratio", invRatio);
//         } else {
//             entry.target.style.opacity = decreasingOpacity.replace("ratio", invRatio);
//         }
            
//       }
//       prevRatio = entry.intersectionRatio;
//     });
// }

// function handleTitleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//         let regRatio = entry.intersectionRatio
        
//         if (entry.intersectionRatio > prevRatio) {
//             entry.target.style.opacity = increasingOpacity.replace("ratio", regRatio);
//         } else {
//             entry.target.style.opacity = decreasingOpacity.replace("ratio", regRatio);
//         }    
//         prevRatio = entry.intersectionRatio;

//     });
// }

function Work() {

  return ( 
    <>  
      <div className="row mt-3 justify-content-around justify-content-md-center">
            
        <div className="titlecard col-md-1 col-10 p-3">
          <h2 id="work">Work</h2>
        </div>
            
        <div className="col-md-9 col-10 contentcard pt-4"> 
                
          <div className="row">
              
            <Worklink href="https://anth8nyc.github.io/MoonPhases/" src={moonphaserdemo} alt="Preview of MoonPhaser Project" title="MoonPhaser"></Worklink>
            <Worklink href="https://anth8nyc.github.io/weatherapp/"  src={weatherapp} alt="Preview of Weather Dashboard" title="Weather Dashboard"></Worklink>
            <Worklink href="https://polar-headland-03677.herokuapp.com/" src={quizami} alt="Preview of Quizami collaborative project" title="Quizami"></Worklink>
                    
          </div>   

          <div className="row">

            <Worklink href="https://anth8nyc.github.io/workdaysched/" src={schedulerdem} alt="Preview of Work Day Scheduler" title="Work Day Scheduler"></Worklink>
            <Worklink href="https://anth8nyc.github.io/userdirectory/"  src={userdirect} alt="Preview of Employee User Directory" title="Employee User Directory"></Worklink>
            <Worklink href="https://hidden-falls-38045.herokuapp.com/" src={fittrackdem} alt="Preview of Fitness Tracker" title="Fitness Tracker"></Worklink>
                    
          </div>    

        </div>

      </div>
    </>
  );
}

export default Work;


