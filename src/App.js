import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  
  const[users,setusers]=useState([]);

  const onUserAdd=(user)=>{
    //console.log(user);
   setusers([...users,user]);
  }

  return (
    <div>
      <UserForm onUserAdd={onUserAdd}/>
      <hr/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
