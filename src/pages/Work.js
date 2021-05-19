import React from "react";
import moonphaserdemo from "../components/images/projectpreviews/moonphaserdemo.png"
import weatherapp from "../components/images/projectpreviews/weatherapp.png"
import schedulerdem from "../components/images/projectpreviews/schedulerdem.png"
// import javasprint from "../components/images/projectpreviews/javasprint.png"
import quizami from "../components/images/projectpreviews/quizami.png"
import userdirect from "../components/images/projectpreviews/userdirect.png"
import fittrackdem from "../components/images/projectpreviews/fittrackdem.png"

function Work() {

  return ( 
    <>  
      <div className="row mt-3 justify-content-around justify-content-md-center">
            
        <div className="titlecard col-md-1 col-10 p-3">
            <h2 id="work">Work</h2>
        </div>
            
        <div className="col-md-9 col-10 contentcard pt-4"> 
                
            <div className="row">

                <div className="col-md-4 col-12 worklink">
                    <a href="https://anth8nyc.github.io/MoonPhases/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={moonphaserdemo} 
                          alt="Preview of MoonPhaser Project"/>
                        <div className ="middle">
                            <h3 className="worktitle">MoonPhaser</h3>
                        </div>
                    </a>  
                </div>
                <div className="col-md-4 col-12 worklink">
                    <a href="https://anth8nyc.github.io/weatherapp/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={weatherapp} 
                        alt="Preview of Weather Dashboard"/>
                        <div className="middle">
                            <h3 className="worktitle">Weather Dashboard</h3> 
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 worklink">
                    <a href="https://polar-headland-03677.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={quizami} 
                        alt="Preview of Quizami collaborative project"/>
                        <div className="middle">
                            <h3 className="worktitle">Quizami</h3> 
                        </div>
                    </a>
                </div>
                    
            </div>   

            <div className="row">

                <div className="col-md-4 col-12 worklink">
                    <a href="https://anth8nyc.github.io/workdaysched/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={schedulerdem} 
                        alt="Preview of Work Day Scheduler"/>
                        <div className="middle">
                            <h3 className="worktitle">Work Day Scheduler</h3>
                        </div>
                    </a>  
                </div>

                <div className="col-md-4 col-12 worklink">
                    <a href="https://anth8nyc.github.io/userdirectory/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={userdirect}
                        alt="Preview of Employee User Directory"/>
                        <div className="middle">
                            <h3 className="worktitle">Employee User Directory</h3>
                        </div>    
                    </a>  
                </div>    
                
                <div className="col-md-4 col-12 worklink">
                    <a href="https://hidden-falls-38045.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="rounded prv img-fluid" src={fittrackdem}
                        alt="Preview of Fitness Tracker"/>
                        <div className="middle">
                            <h3 className="worktitle">Fitness Tracker</h3>
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


