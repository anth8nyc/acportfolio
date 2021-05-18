import React from "react";
import moonphaserdemo from "../components/images/projectpreviews/moonphaserdemo.png"
import weatherapp from "../components/images/projectpreviews/weatherapp.png"
import schedulerdem from "../components/images/projectpreviews/schedulerdem.png"
import javasprint from "../components/images/projectpreviews/javasprint.png"

function Work() {

  return ( 
    <>  
      <div class="row mt-3 justify-content-around justify-content-md-start">
            
        <div class="titlecard col-md-2 col-10 p-3">
            <h2 id="work">Work</h2>
        </div>
            
        <div class="col-md-9 col-10 contentcard pt-4"> 
                
            <div class="row">

                <div class="col-md-6 col-12 worklink">
                    <a href="https://anth8nyc.github.io/MoonPhases/" target="_blank" rel="noopener noreferrer"><img class="rounded prv img-fluid" src={moonphaserdemo} 
                          alt="Preview of MoonPhaser Project"/>
                        <div class ="middle">
                            <h3 class="worktitle">MoonPhaser</h3>
                        </div>
                    </a>  
                </div>
                <div class="col-md-6 col-12 worklink">
                    <a href="https://anth8nyc.github.io/weatherapp/" target="_blank" rel="noopener noreferrer"><img class="rounded prv img-fluid" src={weatherapp} 
                        alt="Preview of Weather Dashboard"/>
                        <div class="middle">
                            <h3 class="worktitle">Weather Dashboard</h3> 
                        </div>
                    </a>
                </div>
                    
            </div>   

            <div class="row">

                <div class="col-md-6 col-12 worklink">
                    <a href="https://anth8nyc.github.io/workdaysched/" target="_blank" rel="noopener noreferrer"><img class="rounded prv img-fluid" src={schedulerdem} 
                        alt="Preview of Work Day Scheduler"/>
                        <div class="middle">
                            <h3 class="worktitle">Work Day Scheduler</h3>
                        </div>
                    </a>  
                </div>

                <div class="col-md-6 col-12 worklink">
                    <a href="https://anth8nyc.github.io/javasprint/" target="_blank" rel="noopener noreferrer"><img class="rounded prv img-fluid" src={javasprint}
                        alt="Preview of coded JavaScript quiz"/>
                        <div class="middle">
                            <h3 class="worktitle">JavaSprint – JavaScript Quiz</h3>
                        </div>    
                    </a>  
                </div>    
                  
            </div>    

          </div>

      </div>
    </>
  );
}

export default Work;


