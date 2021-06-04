import React from "react";
import { useParams, Link } from "react-router-dom";
import WorkInfo from "../../WorkInfo/WorkInfo";




function Workpage() {
    
    const {id} = useParams();
    // console.log(id)
    // let chosework = WorkInfo.filter(work => work.id === id);
    let chosenwork = WorkInfo[id-1];
    // console.log(chosenwork);
    // console.log(chosework);

  return ( <>  
        <div className="row my-3 justify-content-around justify-content-md-center">
                            
            <div className="titlecard col-md-2 col-10 p-3">
                <h2 id="aboutme">{chosenwork.title}</h2>
            </div>
            
            <div className="col-md-9 col-10 contentcard pt-4">

                <div className="row justify-content-around">
                    
                    <div className="p-2 col-12 col-md-4 align-self-center">
                        <p>
                            {chosenwork.info}
                        </p>
                        <Link to="/work" className="worksites">
                            ← Back to Works
                        </Link>
                       
                    </div>
                    <div className ="col-10 col-md-6 m-5">
                        <img className ="img-fluid rounded" id= "me" src={chosenwork.src} alt={chosenwork.alt}/>
                        <div className="mt-3 d-flex align-self-center">
                            <a className="mx-auto worksites" href={chosenwork.href} target="_blank" rel="noopener noreferrer"> Deployed Site</a>
                            <a className="mx-auto worksites" href={chosenwork.ghref} target="_blank" rel="noopener noreferrer"> GitHub Repository</a>
                        </div>
                        {/* <div><p>Foundational Concepts:</p>
                        <ul>
                            <li>React</li>
                            <li>Moongoose (NoSQL)</li>
                            <li>Third Party APIs</li>
                            <li>Local Storage</li>
                        </ul>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  );
}

export default Workpage;


