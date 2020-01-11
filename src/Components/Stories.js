import React from "react";
import useFetch from "../Hooks/useFetch";
const Stories = () => {

     const stories = useFetch(`https://news-proxy-server.appspot.com/topstories`, []);
      return(
       <>
        <h2>Stories</h2>
        {stories.map(story=>{
         const {id, by, time, title, url} = story;
         return(
          <div key={id}>
           <a href={url}>{title}</a>
           <p>{by} - {new Date(time *1000).toLocaleTimeString()}</p>
          </div>
         );
        })}
       </>
      );
}

export default Stories;