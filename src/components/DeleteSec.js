import React from 'react'
import DeleteSecItem from './DeleteSecItem'
export default function DeleteSec(props) {

  return (
    <div className='container'>
        <h2 className='text-center'>Delete Subject</h2>
        <div className="row">
        {props.secs.map((sec)=>{
            return <DeleteSecItem key={sec._id} newsec={sec.newsec} _id={sec._id}/>
        })}
    </div>

    </div>
  )
}
