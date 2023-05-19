import React from 'react';

export default function Linkss(props) {
  return(<>
  <div className='container col-md-4'>
  <div className="card my-3" >
  
  <div className="card-body">
    <h5 className="card-title">{props.ctitle}</h5>
    <p className="card-text">{props.cdescription}</p>
    <a href={props.clink} className="btn btn-primary">Open</a>
  </div>
</div>
</div>
  
  </>);
}
