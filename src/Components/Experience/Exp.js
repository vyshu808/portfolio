import React from 'react';
import './Exp.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';

const Exp = () => {
  return (
   <section id='Experience'>
    <h2 className='expTitle'>Experience</h2>
    <span className='expDesc'>
    Here are the details of my Experience as holding 3+years of experinece as a frontend developer,<br/>
            At first I have worked @Accenture, Hyderabad for about 1year,<br/>
            There my journey as started as a frontend developer as I was fresher,I use to focus on the task which are given to me.<br/> Those task should be completed within time provided.
            There we use Developed and maintaines frontend functionality of web applications, <br/>Utilized Javascript,HTML,CSS to create responsive design &
            Responsive and visual appealing web applications.<br/> And Integrated product data from an external API,Enabling a board product catlog for users.<br/>
            Leveraged React class-based components,<br/>Utlizing lifecycle methods and advanced state managment for a highly interactive experience.<br/>
            We use to provide a secure interface with CURD operations.<br/> Not only this we use to work with combine Nextjs(React-based Framework)and 
            CSS for a modern design. <br/>
            Now I am working @OSS Technologies PVT LTD, Banglore<br/>
            Here we work on custom plugins, Proficient in class components , functional components , Props,States&Life cycle methods.<br/>
            We use to work with React Hooks, Redux, React Router, CSS, HTML, JavaScript, <br/>
            Expertise in React-Hooks including usestate, useeffect,usecontext.<br/>
            This is a brief explanation of my experience which I have grabbed till now.
    </span>
    <div className='expImg'>
    <img src= {Portfolio1} alt='' className='expImg'/>
    <img src={Portfolio2} alt='' className='expImg'/>
    <img src={Portfolio3} alt='' className='expImg'/>
    <img src={Portfolio4} alt='' className='expImg'/>
    <img src={Portfolio5} alt='' className='expImg'/>
    </div>
    <button className='expbtn'> See More</button>
   </section>
  );
}

export default Exp
