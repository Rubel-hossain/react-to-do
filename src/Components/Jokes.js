import React,{useState,useEffect} from "react";
import useFetch from "../Hooks/useFetch";
const Jokes = () => {

 const { setup, punchline } = useFetch(`https://official-joke-api.appspot.com/jokes/random`, {});
     return(
      <>
       <div className="items-wrapper">
        <h2>Jokes</h2>
        <p>{setup}</p>
        <p><em>{punchline}</em></p>
       </div>
      </>
     );
}

export default Jokes;