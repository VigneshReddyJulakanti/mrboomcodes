import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Code_plate(props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return(
      <>
<div className='container my-3'>
<div className="form-floating">

  <div className="card-body">
    <div className='d-flex  align-items-center'style={{"position":"relative" , "left":"-7px"}}>
    <h5 className="card-title mx-2 text-danger" style={{"textAlign":"left"}}>{props.title}</h5>
    {localStorage.getItem("admin")?<span><i className="fas fa-edit mx-3 " onClick={()=>{props.handle_edit(props.single_codes)}}></i>
    <i className="fas fa-trash " onClick={()=>{props.delete_code(props._id)}}></i></span> :   <p></p> }</div>
    <p className="card-text">{props.description}</p>
   
  </div>
  
  {/* <textarea name='code' className="form-control"  placeholder="Leave a comment here" id="floatingTextarea2"  style={{"height": "400px"}} value={props.code}>
      
  </textarea> */}

<CopyToClipboard text={props.code} onCopy={handleCopy}>
        <button className='btn btn-info'> 
        <i className="fas fa-copy"></i>
          {copied ? ' Copied!' : ' Copy'}
        </button>
      </CopyToClipboard>
  <SyntaxHighlighter language='python' >

      {props.code}
    </SyntaxHighlighter>
  
</div>
</div>
<hr></hr>
      </>
  );
}
