import React, { useState } from 'react'
import Major from './Major';
import Position from './Position';

const Register2 = () => {

    const [data, setData] = useState({
        VotingNumber:'',
        CandidateName:'',
        Pledge:''
    });

    const InputEvent= (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit= (e) => {
        // e.preventDefault();
        // alert(
        //     'Your position is ${data.position}. Your Voting Number is ${data.VotingNumber}. Your Candidate Name is ${data.CandidateName}. Your Pledge is ${data.Pledge}'
        //     );

    };

    return (  
    <>
       <div className= "my-5">
           <h1 className="text-center">
               [ Register Candidates ]
           </h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className= "col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                   <label for="exampleFromControlInput1" class= "form-label">
                                Major
                            </label>
                       <Major/>
                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Position
                            </label>
                            <Position/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Voting Number
                            </label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "VotingNumber"
                                value={data.VotingNumber}
                                onChange={InputEvent}
                                placeholder="Enter your Voting Number.
                                (Start with NO.1)"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Candidate Name
                            </label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "CandidateName"
                                value={data.CandidateName}
                                onChange={InputEvent}
                                placeholder="Enter Candidate Name"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                 Pledge
                            </label>
                            <textarea 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                rows= "15"
                                name= "Pledge"
                                value={data.Pledge}
                                onChange={InputEvent}
                                placeholder="Enter 3 basic election pledges.
                                -You can write up to 15 lines." 
                            />
                        </div>

                        <div class= "col-12">
                            <button class= "btn btn-outline-primary" type= "submit">
                                Submit form
                            </button>
                        </div>

                   </form>
               </div>
           </div>
       </div>
    </>
    );
};
export default Register2;