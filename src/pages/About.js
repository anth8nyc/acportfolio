import React from "react";
import { Link } from "react-router-dom";
import self from "../components/images/self.JPG";

function Nav() {

  return ( <>  
        <div className="row my-3 justify-content-around justify-content-md-center">
                            
            <div className="titlecard col-md-2 col-10 p-3">
                <h2 id="aboutme">About</h2>
            </div>
            
            <div className="col-md-9 col-10 contentcard pt-4">

                <div className="row justify-content-around">
                
                    <div className="p-2 col-12 col-md-6 align-self-center">
                        <p>
                            I'm a Full Stack web developer from Richardson, TX. I first studied Neuroscience 
                            at the University of Texas at Dallas, and hope to combine a knowledge of web development
                            with this experience to sharpen a unification of web development, cognition, and intuitive UI/AI.
                            I studied web development and earned my certification in Full Stack Web Development from Southern Methodist University.
                        </p>
                        <p>
                            Web development is becoming like any verbal language we might speak– important for expression, 
                            knowledge, culture, and therefore love– so I'm pasionate about learning to speak it better. Thus far, my strengths lie
                            in the algorithmic nature of front end logic, the RESTful management of custom API and third party API routing, refactoring code
                            for optimization, React.js, and front end CSS frameworks. The rest of my passions lie in learning about sociology, rock climbing the outdoors,
                            and sharing music with my friends in any possible sense of the word.<Link to="/contact" className="aboutlink">Reach out to me</Link>– I'm excited to meet you.
                        </p>
                    </div>
                    <div className ="col-7 col-md-3 m-5">
                        <img className ="img-fluid rounded" id= "me" src={self} alt="Profile"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Nav;


