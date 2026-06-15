import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  async function getUser() {
    let response = await fetch('https://api.freeapi.app/api/v1/public/randomusers/')
    let data = await response.json();
    let userData = data.data.data
    console.log(userData)
    setUser(userData)
    console.log(user);
    
  }

  return (
    <div className="container flex flex-col items-center gap-5">
      <h1> Fetch Posts from random API</h1>
      <div className="flex gap-2">
        <button
          onClick={() => {
            getUser();
          }}
          className="bg-white text-black"
        >
          Fetch Posts
        </button>
        {user.length != 0 &&  
          <button onClick={()=>{
            setUser([])
          }}
           className="bg-gray-600"
          >Clear posts</button>
        }
      </div>
      {user.length == 0 && <p className="noPost">No posts available ...</p> }
      <div className="flex gap-3 flex-wrap items-center justify-center">
         {user.map((u)=>{
             return (
               <div className="bg-gray-900 w-sm flex justify-between px-10 card">
                <div>
                  <img src={u.picture.medium} alt="image" />
                </div>
                  <div className="info">
                    <h3>{u.name.title} {u.name.first} {u.name.last}</h3>
                    <p>gender : {u.gender}</p>
                    <p>Age : {u.dob.age}</p>
                  </div>
               </div>
             )
         })}
      </div>
    </div>
  );
}

export default App;
