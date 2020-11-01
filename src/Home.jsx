import React from 'react'
import homeimg from "./Image/welcome.png"
import Commom3 from './Commom3'

const Home = () => {
    return (
        <>
        <Commom3 
            name='[ Welcome ]'
            imgsrc={homeimg}
            visit= "/about"
            btname="Get Start"
            alt="home image"
        />
        </>
    );
};
export default Home;