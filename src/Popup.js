import React,{useState,useEffect} from "react";

const Popup=()=>{
    const [joke, setJoke]=useState("loading...");

    useEffect(()=>{
        fetch("https://icanhazdadjoke.com/slack",{
            headers:{Accept:"application/json"}
        })
            .then((response)=> response.json())
            .then((jokeData)=>{
                const jokeText=jokeData.attachments[0].text;
                setJoke(jokeText);
            })
            .catch((error)=>{
                setJoke("Oops! Something went wrong!");
                console.log(error);
            });

    }, []);

    return(
        <div style={popupStyle}>
            <p style={jokeStyle}>{joke}</p>
        </div>
    );
};

const popupStyle={
    width:"300px",
    height:"300px",
    backgroundColor:"#dcd534",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
};

const jokeStyle={
    fontSize:"22px",
    color:"blue",
    borderRadius:"6px",
    border:"1px solid lightcoral",
    padding:"10px"
}

export default Popup;