import React from 'react'
import logoIcon from '../../Assets/Images/headerlogonew.png';
const Head = () => {
  return (
    <section className='header'>
      <div className='logo'>
        <img src={logoIcon} className='logoimg' alt='Sharman'/>
      </div>
			<h1 className='Webname'>Priyanshu Sharma</h1> 
    </section>
  )
}
export default Head;
