import React ,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Codecontext from '../context/codes/CodeContext';

export default function Admin_login() {
     const context = useContext(Codecontext);
    const navigate=useNavigate();
    const handleSubmit=(a)=>{
        a.preventDefault();
        context.admin_post(document.getElementById("exampleInputEmail1usernameadmin").value,document.getElementById("exampleInputPassword1adminpassword").value)

   
          
        }
    
  return (<>
  
<div className='container'>
  <h2 className="my-3">Only Admin can add edit or delete codes , login to get admin access</h2>
  <form>
  <div className="mb-3 my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input className="form-control" id="exampleInputEmail1usernameadmin" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1adminpassword"/>
  </div>
 
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>

<p className='my-3' id="boomnotadmin"></p>
</div>
  </>)
}
