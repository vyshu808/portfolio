import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

function intro() {
    return (
        <section id='Intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm <span className='introName'>Sreepada Vaishnavi</span><br />Frontend Developer</span>
                <p className='introPara'>A Frontend developer Working in a Organization<br/> @Banglore.Holding 3years of Experience with React</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
            </div>
        </section>
    );
}

export default intro
