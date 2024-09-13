import { useState } from "react";

export default function Personal(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submit, toggleSubmit] = useState(false)
  
    function Submit(){
      toggleSubmit(true)
    }
    function Edit() {
      toggleSubmit(false)
    }
    
      if (!submit)return (
      <>
     <label >
      Name:
      {" "}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
     </label>
     <label >
      Email:
      {" "}
      <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
     </label>
     <label >
      Phone Number:
      {" "}
      <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
     </label>
     <button onClick={Submit}>Submit</button>
     </>
     )
    if (submit) return(
      <>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone Number: {phone}</h1>
      <button onClick={Edit}>Edit</button>
      </>
    )
    
}