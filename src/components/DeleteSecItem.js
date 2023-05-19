import React from 'react'
import Codecontext from '../context/codes/CodeContext';
import { useContext } from 'react';
export default function DeleteSecItem(props) {
  const context = useContext(Codecontext);

  return (
    <div className='container col-md-4'>
    <div className="card my-3" >
    
    <div className="card-body">
      <h5 className="card-title">{props.newsec}</h5>
      <a onClick={()=>{context.deletenewsec(props._id)}} className="btn btn-primary">Delete</a>
    </div>
  </div>
  </div>
  )
}
