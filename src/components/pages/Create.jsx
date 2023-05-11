import React, { useContext } from 'react'
import "../styles/create.css"
import { QuoteContext } from '../../blog-context/context';

const Create = () => {
  
  const {  content , setContent , addQuote } = useContext(QuoteContext)
  return (
    <>
    <div className='createMain'>
      <h2 className='createH2'>Create a Quote</h2>
      <form >
        <div className='createTitle'>
          <p className='createP'>Quote: </p>
          
          <textarea 
            typeof='text'
            className='createTextarea'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

        </div>
        
        <button type='submit' 
          className='createButton'
          onClick={(e) => {e.preventDefault() ; addQuote(content)}}
        >Add Quote</button>
      </form>
      
    </div>
    
    </>
  )
}

export default Create