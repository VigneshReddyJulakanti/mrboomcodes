import {  useState } from "react";
import Codecontext from "./CodeContext";
import React  from 'react';
import { useNavigate } from "react-router-dom";
const CodeState = (props) => {
  let navigate = useNavigate();
  // const host = "http://localhost:5000";
  const host="https://sleepy-tie-eel.cyclic.app"

  //for present state

  const [presentState, setpresentState] = useState("none")
  const [fetched_codeall, setfetched_codeall] = useState([]);
  

  // const [fetched_codeds, setfetched_codeds] = useState([]);
  // const [fetched_codecpp, setfetched_codecpp] = useState([]);




  //Loading all sections
  const [fetched_newsec, setfetched_newsec ]= useState([]);

  

  const Loadnewsec = async (a) => {
    // a.preventDefault();
    const response = await fetch(`${host}/api/notes/newsec`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
      //  body: JSON.stringify({"code":code_text.code[0]})
    });

    let fetchednewsec = await response.json();

    setfetched_newsec(fetchednewsec);
    return fetchednewsec;
    // console.log(fetched_newsec,fetchednewsec)
  };


  //Loading All Notes
  
  const LoadAllNotes = async (secname) => {
    // a.preventDefault();
    const response = await fetch(`${host}/api/notes/allnotes?secname=${secname}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
      //  body: JSON.stringify({"secname":secname})
    });

    let fetched_codes = await response.json();

    setfetched_codeall(fetched_codes);
    // return fetched_codes;
    // console.log(fetched_codeds);
  };


  // update all notes

  const editallcode=async(code,title,description,_id)=>{
    // const auth_token=localStorage.getItem('authtoken');

    // API call
    await fetch(`${host}/api/notes/allnotes`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-no-cors, *no-cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      
       
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
       body: JSON.stringify({hlo:code,title,description,_id})
    });

  
  let newcode=fetched_codeall.slice();
  // console.log(id)
  for (let index = 0; index < newcode.length; index++) {
    const element = newcode[index];
    // console.log(element._id)
    
    if(element._id===_id){
      newcode[index].title=title;
      newcode[index].description=description;
      newcode[index].code=code;
      
      
      break;
    }
  }
  setfetched_codeall(newcode);
  // return newcode;
  
}


// delete all notes


const deleteallnotes=async(_id)=>{
    

    
  await fetch(`${host}/api/notes/allnotes`, {
  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-no-cors, *no-cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',

   
  },
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   // body data type must match "Content-Type" header
   body: JSON.stringify({_id})
});

// client side delete
// console.log("f",fetched_codeds)
let newnote=fetched_codeall.filter((note)=>{return note._id!==_id})
// console.log(newnote);
setfetched_codeall(newnote);
}


const deletenewsec=async(_id)=>{
    

    
  await fetch(`${host}/api/notes/sec`, {
  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-no-cors, *no-cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',

   
  },
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   // body data type must match "Content-Type" header
   body: JSON.stringify({_id})
});

// client side delete
// console.log("f",fetched_codeds)
let newnote=fetched_newsec.filter((note)=>{return note._id!==_id})
// console.log(newnote);
setfetched_newsec(newnote);
}


  // admin
  const admin_post=async(user,pass)=>{
    const response = await fetch(`${host}/admin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
       body: JSON.stringify({user,pass})
    });

    let got_response = await response.json();
    if(got_response.success==="true"){

      localStorage.setItem("admin","true");
      document.getElementById("boomnotadmin").innerHTML="";
      navigate("/");

  }else{
          document.getElementById("boomnotadmin").innerHTML="Boom Boom Boom , You are not an Admin";
  }
}
    




  return(
    <Codecontext.Provider value={{deletenewsec,fetched_codeall,host,admin_post,fetched_newsec, setfetched_newsec ,Loadnewsec,LoadAllNotes,editallcode,deleteallnotes,presentState,setpresentState}}>
        {props.children}
    </Codecontext.Provider>
    )


};

export default CodeState
