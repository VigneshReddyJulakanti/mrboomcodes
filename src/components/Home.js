

import React from 'react';
import Linkss from './Linkss';




export default function Home() {


      

            // {title:"",description:"",link:""},
            const links=[{title:"LEETCODE",description:"Here you can practice many Coding Questions , This website mainly focuses on JOB Interview Questions",link:"https://leetcode.com/"},{title:"Making own Whatsapp Bot",description:"You can make a whatsapp bot using python , so you can send 10,000 messages at a time",link:"https://youtu.be/qj_B3w8-uCU"},{title:"This website",description:"This website is made of MERN stack , learnt from CodeWithHarry",link:"https://youtu.be/-mJFZp84TIY"},{title:"MERN Hosting : Heroku",description:"Heroku is platform to host MERN applications for free",link:"https://dashboard.heroku.com/apps"},{title:"Python video Course",description:"A video tutorial to learn python",link:"https://youtu.be/gfDE2a7MKjA"},{title:"Making Personal assistant",description:"You can make your own personal assistant using python",link:"https://youtu.be/fUF3odhQ6-s"},{title:"Hackathons",description:"In Hackerearth website you can find many hackathons",link:"https://www.hackerearth.com/challenges/"},{title:"CodeChef",description:"You can find many coding problems and also can participate in challenges",link:"https://www.codechef.com/"},{title:"GSOC",description:"Google Summer Of COde , an open source contribution event by google",link:"https://summerofcode.withgoogle.com/"},{title:"Google KickStart",description:"A competitive Programming Competition conducted by google several times in a year",link:"https://codingcompetitions.withgoogle.com/kickstart"},{title:"Think School",description:"A youtube channel you will get addicted to , It offers a high quality information on Business Case Studies",link:"https://www.youtube.com/c/ThinkSchool/videos"},{title:"GITHUB",description:"An account every developer must have,You can work in teams with this ,You can save your code and a lot ...",link:"https://github.com/"},]

  

 




 


 
  
  


  return (
      <>

 

<div className="alert alert-info alert-dismissible fade show" role="alert">
   Select the subject , by clicking 3 lines above 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<marquee width="100%" direction="left"  className="my-3 text-danger">
Have any query or want to contribute code or any thing more to add in this website , mail us at neilcodesboom@gmail.com
</marquee>
<h2 style={{"textAlign":"center"}}>Some Important Links</h2>
<div className="row">

{
      
      links.map((link)=>{
            return <Linkss key={link.link} ctitle={link.title} cdescription={link.description} clink={link.link}></Linkss>
      })
    
}




</div>

    
      
      
      </>
      

 );
}
