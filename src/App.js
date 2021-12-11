import React, { useState } from "react"


export default function App() {
  const [user, setUser] = useState({name:"José"});
  
  return <div>{user ? <h1>Estas logeado</h1>:<h1>No estas Logeado</h1>}</div>;

  
}

 
