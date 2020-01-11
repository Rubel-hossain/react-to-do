import React,{useState} from 'react';
import "./App.css";
import Jokes from "./Components/Jokes";
import Stories from "./Components/Stories";
import Tasks from "./Components/Tasks";
function App() {
  const [userQuery,setUserQuery] = useState("");
  const updateUserQuery = (e) => {
    setUserQuery(e.target.value);
  }
  const searchQuery = (e) => {
    window.open(`https://google.com/search?q=${userQuery}`,'__blank');
  }
  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      searchQuery();
    }
  }
  return (
    <div className="App">
      <h1>Hello Rubel Hossain</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
        <button onClick={searchQuery}>Search</button>
      </div>
      <Jokes/>
      <hr/>
      <Stories/>
      <hr/>
      <Tasks/>
    </div>
  );
}

export default App;
