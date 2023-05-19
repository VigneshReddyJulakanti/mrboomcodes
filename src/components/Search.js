import React, { useState ,useContext,useRef} from 'react'
import Codecontext from '../context/codes/CodeContext';
import Code_plate from './Code_plate';

export default function Search() {

    const context = useContext(Codecontext);
    const {deleteallnotes,editallcode} =context;
     const [searched, setsearched] = useState([]);
     const [ecodes, setecodes] = useState({ecode:"",etitle:"",edesecription:"",eid:""})

     const handledeleteallnodes=(_id)=>{
        deleteallnotes(_id)
        let newnote=searched.filter((note)=>{return note._id!==_id})
setsearched(newnote);
     }
     const ref = useRef(null)
    const closeref = useRef(null)
    const handle_edit=(note)=>{
        ref.current.click();
        setecodes({ecode:note.hlo,etitle:note.title,edescription:note.description,eid:note._id})
        
  

    }
const handdleupdateclick =()=>{
      console.log(ecodes)
        
      editallcode(ecodes.ecode,ecodes.etitle,ecodes.edescription,ecodes.eid);

      let newcode=searched.slice();
      // console.log(id)
      for (let index = 0; index < newcode.length; index++) {
        const element = newcode[index];
        // console.log(element._id)
        
        if(element._id===ecodes.eid){
          newcode[index].title=ecodes.etitle;
          newcode[index].description=ecodes.edescription;
          newcode[index].code=ecodes.ecode;
          
          
          break;
        }
      }
      setsearched(newcode);

            closeref.current.click();
        
    }

    const ehandleonchange =(e)=>{
        setecodes({...ecodes,[e.target.name]: e.target.value})
  
  
    }
    const handleSearch=async(a)=>{


        // console.log(code_text)
        // console.log(code_text.code[0])
        a.preventDefault();

        let words = await document.getElementById("exampleInputEmail1245").value;

        const response = await fetch(`${context.host}/api/notes/search`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // cors, *no-cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"words":words})
        });
       
        let codedata=await response.json();
        setsearched(codedata)
      }


  return (
    <>

<button hidden ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
          
       
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
  
  
                <div className="mb-3">
              <label htmlFor="etitle" className="form-label">title</label>
              <input value={ecodes.etitle} type="text" name='etitle' minLength={2} className="form-control" id="etitle" onChange={ehandleonchange}/>
              
            </div>
            <div className="mb-3">
              <label htmlFor="edescription" className="form-label">description</label>
              <input value={ecodes.edescription} type="text"  minLength={5} name="edescription" className="form-control" id="edescription" onChange={ehandleonchange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="etag" className="form-label">code</label>
              <textarea name='ecode' className="form-control"  placeholder="Leave a comment here" id="ecode"  style={{"height": "400px"}} value={ecodes.ecode} onChange={ehandleonchange}></textarea>
              
            </div>
                  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
                  <button type="button" className="btn btn-primary"  onClick={handdleupdateclick}>Update</button>
                </div>
              </div>
            </div>
          </div>



    <div className='container'>

        <h2 className='text-center'>Search</h2>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail12" className="form-label">Enter words</label>
    <input   className="form-control" id="exampleInputEmail1245" />
    <button onClick={handleSearch} className='btn btn-primary my-3'>Search</button>
    
  </div>

  <hr/>
  { 
    
    searched.length>0 && searched.map((single_code)=>{
      
    
      return <Code_plate key={single_code._id} single_codes={single_code} code={single_code.hlo} title={single_code.title} description={single_code.description} delete_code={handledeleteallnodes} _id={single_code._id} handle_edit={handle_edit}/>
    })
  }

  {searched.length==0 && <div className='text-center text-primary'>If any of your searches matches, the codes appear here.</div>}
    </div>
    </>
  )
}
