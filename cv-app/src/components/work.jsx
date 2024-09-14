import { useState } from "react";

export default function Work(){
  const [jobs, editJobs]=useState([{id: crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}]);

  function Job({id, companyprop, roleprop, responseprop, dateprop, submitted}){
    const [company, setCompany]= useState(companyprop);
    const [role, setRole]=useState(roleprop);
    const [responsibility, setResponsibility]=useState(responseprop);
    const [date, setDate]=useState(dateprop);

    function Submit(){
      if (submitted === false){
        const jobInfo = {id, company, role, responsibility, date, submitted: true}
        console.log(jobInfo)
        editJobs([...jobs.map(workplace => {
          if (workplace.id !== id){
            return workplace
          } else{
            return jobInfo
          }})])
      } else if (submitted === true){
        const schoolInfo = {id, company, role, responsibility, date, submitted: false}
        editJobs([...jobs.map(workplace => {
          if (workplace.id !== id){
            return workplace
          } else{
            return schoolInfo
          }})])
      }
    }
    function Delete(){
      editJobs([...jobs.filter(workplace => workplace.id !== id)])
    }
    
    if (submitted === false) {
      return(
        <>
        <br/>
        <label>
          Company Name:
          {" "}
          <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          />
        </label>
        <label>
          Position Title:
          {" "}
          <input
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          />
        </label>
        <label>
          Responsibilities:
          {" "}
          <input
          type="text"
          value={responsibility}
          onChange={(event) => setResponsibility(event.target.value)}
          />
        </label>
        <label>
          Dates Worked:
          {" "}
          <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <button onClick={Submit}>Submit</button>
        </>
    )} else if (submitted === true){
      return(
        <>
        <br/>
        <h1>Company Name: {company}</h1>
        <h1>Position Title: {role}</h1>
        <h1>Responsibilities: {responsibility}</h1>
        <h1>Dates Attended: {date}</h1>
        <button onClick={Submit}>Edit</button>
        <button onClick={Delete}>Delete</button>
        </>
    )}
  }

  function Add() {
    editJobs([...jobs, {id:crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}])
  }

  return(
    <>
    <h1>Work</h1>
    {jobs.map(workplace => <Job key={workplace.id} id={workplace.id} companyprop={workplace.company} roleprop={workplace.role} responseprop={workplace.responsibility} dateprop={workplace.date} submitted={workplace.submitted}/>)}
    <button onClick={Add}>+</button>
    </>
  )
}