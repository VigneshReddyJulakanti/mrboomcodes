import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext ,useEffect} from 'react';
import Codecontext from '../context/codes/CodeContext';
export default function Navbar() {

  const context =useContext(Codecontext);

  useEffect(() => {
   context.Loadnewsec()
  }, [])
 
  let data=context.fetched_newsec;

  useEffect(()=>{
    data=context.fetched_newsec;
  },[context.fetched_newsec])

  const navigate =useNavigate()
  const handlelogout=(a)=>{
    a.preventDefault()
        
        localStorage.removeItem('admin');
        navigate("/admin_login")
  }


  return(<>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-info ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MrBoomCodes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>


        {/* <li className="nav-item">
          <Link className="nav-link" to="/ds">DS Codes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cpp">Python Codes</Link>
        </li> */}

{
  data.map((singledata)=>{
    return <li key={singledata.newsec} className='nav-item'>
    
    <Link className="nav-link" to="/allnotespage" onClick={()=>{
      context.setpresentState(singledata.newsec);
    }}>{singledata.newsec}</Link>
    </li>
  })
}
<li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
         
        </li>
        
        
        {localStorage.getItem("admin")?
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/add_code">Add Code</Link>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={handlelogout} to="/">Logout</Link>
        </li>
        </ul>
        

        :
        <li className="nav-item">
        <Link className="nav-link" to="/admin_login">Admin Login</Link>
      </li>

        }
        
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  
  </>);
}
