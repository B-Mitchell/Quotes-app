import React from 'react'
import { GithubLogo } from 'phosphor-react'
import { TwitterLogo } from 'phosphor-react'
import { LinkedinLogo } from 'phosphor-react'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div className='contact-main-div'>
      <h3 className='contact-h3'>My name is Mitchell, you can call me BM.</h3>
      <p className='contact-p'>connect with me on my social media handles down below</p>
      <ul className='contact-ul'>
        <li className='contact-li'><a href="https://www.linkedin.com/in/mitchell-onuorah-101064261"><GithubLogo size={32} className='Slogos' /></a></li>
        <li className='contact-li'><a href="github.com/B-Mitchell"><LinkedinLogo size={32} className='Slogos' /></a></li>
        <li className='contact-li'><a href='https://twitter.com/agba__dev?s=21' ><TwitterLogo size={32} className='Slogos' /></a></li>
      </ul>
    </div>
  )
}

export default Contact
