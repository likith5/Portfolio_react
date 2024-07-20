import React from 'react'

const Footer=()=> {
    let date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear); 
  return (
    <div className='footer' >
      <h6>{currentYear} All Rights reserved © Made with React|Designed and Developed by Likith</h6>
    </div>
  )
}
export default Footer;