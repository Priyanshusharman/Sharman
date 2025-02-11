import React from 'react'
import Achievements from '../../Components/ResumeComponent/Achievements';
import Experience from '../../Components/ResumeComponent/Experience';
import Hobbies from '../../Components/ResumeComponent/Hobbies';
import Project from '../../Components/ResumeComponent/Project';
import TechSkill from '../../Components/ResumeComponent/TechSkill';

const Resume = () => {
  return (
    <section className='resume-container'>
      <div className='my-info'>
        <h1 className='name'>Priyanshu</h1>
        <div className='social-link'>
          <div className='mobileno link-container'><img src='' alt='' className='logo' /> +91 6200423282</div>
          <div className='email link-container'><img src='' alt='' className='logo' />Aidpriyanshu@gmail.com</div>
          <div className='linkdin link-container'><img src='' alt='' className='logo' />Linkdin</div>
          <div className='github link-container'><img src='' alt='' className='logo' />Github</div>
        </div>
      </div>
      <div className='exerience-container'>
        <Experience />
      </div>
      <div className='project-container'>
        <Project />
      </div>
      <div className='tech-skill-container'>
        <TechSkill />
      </div>
      <div className='achievements-container'>
        <Achievements />
      </div>
      <div className='hobbies-container'>
        <Hobbies />
      </div>
    </section>
  )
}

export default Resume;