// eslint-disable-next-line
import React from 'react';
import Commom2 from './Commom2';
import Register from "./Image/Candidate.jpg"

const Registration = () => {
    return (
        <>
        <Commom2 
            name='[ Registration ]'
            imgsrc={Register}
            visit= "/register2"
            btname="To Register"
            alt="register image"
            />
        </>
        
    );
};
export default Registration;