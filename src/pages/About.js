import React from "react";
import self from "../components/images/self.JPG";

function Nav() {

  return ( <>  
        <div className="row my-3 justify-content-around justify-content-md-center">
                            
            <div className="titlecard col-md-2 col-10 p-3">
                <h2 id="aboutme" >About</h2>
            </div>
            
            <div className="col-md-9 col-10 contentcard pt-4">

                <div className="row justify-content-around">
                
                    <div className="p-2 col-12 col-md-6 align-self-center">
                        <p>
                            I'm a newly educated web developer from Richardson, TX. I first studied Neuroscience 
                            at the University of Texas at Dallas, and hope to combine a budding knowledge of web development
                            with this experience to sharpen a unification of cognition and intuitive UI/AI. I learned web 
                            development through a bootcamp course offered by Southern Methodist University and Trilogy Education services and was drawn to web
                            development because it is increasingly like a language-- important for expression, 
                            knowledge, culture, and therefore love. I want to learn to speak it.
                        </p>
                    </div>
                    <div className ="col-7 col-md-3 m-5">
                        <img className ="img-fluid rounded" id= "me" src={self} alt="Profile"/>
                        {/* <img className ="img-fluid rounded" id= "me" src="assets/images/self.JPG" alt="Profile"/> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Nav;


