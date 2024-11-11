import React from 'react';
import './Skills.css';
import JSDesign from '../../assets/js.png';
import ReactDesign from '../../assets/react.png';
import NodeJSDesign from '../../assets/nodejs.png';
import HTMLDesign from '../../assets/HTML.png';
import CSSDesign from '../../assets/css.png';
import BootstrapDesign from '../../assets/bootstrap.png';
const Skills = () => {
  return (
    <section id='Skills'>
        <span className='skillsTitle'>My Skills<br/></span>
        <span className='skillDesc'>In this section I am sharing all my skills which I have been grabbed from all the 3years.<br/>
            As an experienced candidate in the IT indrustry which is fast & smart growing network & worked with the <br/>
            Reputed Organization I learned how the things & world growing fast. <br/>So i needed to fit in the fast & smart growing network.<br/>
            I grabbed the skills as follows.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={JSDesign}alt='JSDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>JavaScript</h2>
                        <p>With over three years of experience, I have honed my JavaScript skills, <br/>focusing on building rich web applications that are not only functional but also visually engaging and highly performant.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={ReactDesign}alt='ReactDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>React</h2>
                        <p>React is a powerful JavaScript library <br/>Developed by Facebook for building user interfaces, particularly single-page applications where data changes frequently. <br/>It focuses on efficiently updating and rendering components, making it ideal for dynamic, data-driven web applications.<br/> React's component-based architecture encourages reusability, leading to maintainable and scalable code.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={NodeJSDesign}alt='NodeJSDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>NodeJS</h2>
                        <p>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript on the server side.<br/> Built on Chrome's V8 JavaScript engine, it provides an efficient,<br/> event-driven architecture and a non-blocking I/O model,<br/> Making it ideal for building fast and scalable network applications.<br/> With its vast ecosystem of packages through npm (Node Package Manager),<br/> Node.js supports backend development for web and mobile apps,<br/> API creation, and real-time applications like chat or data streaming.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={HTMLDesign}alt='HTMLDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>HTML</h2>
                        <p>With over 3 years of IT experience, I am well-versed in HTML,<br/> The foundational language for creating structured web content. HTML (HyperText Markup Language) <br/>Defines the structure of web pages, using a system of elements and tags to format text, images, links, and other content.<br/> Proficient in using HTML to create accessible, SEO-friendly, and well-structured websites,<br/> I can design layouts that effectively integrate with CSS and JavaScript for a seamless user experience."</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={CSSDesign}alt='CSSDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>CSS</h2>
                        <p>I have strong expertise in CSS for designing and styling modern, responsive web pages.<br/> My CSS skills enable me to create visually engaging layouts, optimize user interfaces for performance, and ensure consistency across devices.<br/> I am proficient in advanced CSS techniques, including Flexbox, Grid, animations, and media queries,<br/> Which I leverage to build intuitive and interactive web experiences.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={BootstrapDesign}alt='BootstrapDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Bootstrap</h2>
                        <p>Bootstrap is a powerful front-end framework that simplifies the process of building responsive, mobile-first web applications. <br/>It offers a collection of pre-styled components like navigation bars, buttons, forms, and grids, allowing for rapid and efficient design.
                        Bootstrap’s flexible grid system, extensive component library, and built-in responsiveness<br/> To create visually appealing and user-friendly interfaces. <br/>Its customization options and CSS-based styling tools make it an invaluable asset for creating professional, consistent layouts across various screen sizes. </p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills
