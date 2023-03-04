import React, {useState, useEffect} from "react";
import "../../styles/traffic.css"

//include images into your bundle

//create your first component
const Home = () => {
	const[active, setActive] = useState("")
	useEffect(()=>{console.log(active)},[active])

  return (<>
      <h1 className="text-center mt-5">Traffic Light</h1>
     
          <div className={"rounded-circle " + `red-light` + `${active==="rounded-circle red-light"? " red-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Red</div> 
		  <br/>
          <div className={"rounded-circle " + `yellow-light` + `${active==="rounded-circle yellow-light"? " yellow-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Yellow</div> 
		  <br/>
          <div className={"rounded-circle " + `green-light` + `${active==="rounded-circle green-light"? " green-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Green</div> 
        
      </>
    
  );
};

export default Home;
