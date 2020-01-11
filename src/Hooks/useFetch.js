import React, {useState, useEffect} from "react";

const useFetch = (url, initalState) => {
 const [result, setResult] = useState(initalState);
 useEffect(() => {
  fetch(url).then(response => response.json())
   .then(data => setResult(data));
 },[]);

 return result;
}

export default useFetch;
