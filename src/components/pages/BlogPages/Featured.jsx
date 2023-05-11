import React, { useContext } from 'react'
import "../../styles/featured.css"
import { ThumbsUp , Trash } from "phosphor-react"
import {QuoteContext} from '../../../blog-context/context'

const Featured = () => {
    const { quote , deleteQuote , addLiked , like } = useContext(QuoteContext)
    const styles = {
        likes: {
            color: like ? "red" : "black"
        }
    };
  return (
    <div className='featuredMain'>
        {
        quote.length === 0 ?
        <h2 className='featuredH2'>
            No Quotes yet, go to the pencil icon at the top left of the page to add a quote.
            </h2> : 
            <ul className="Featuredmain">
                {
                quote.map((newq) => {
                    return (
                    <li key={newq.id}  className='featuredQuotes'>
                        <p>{newq.blogC}</p>
                        <div className='featuredIcons'>
                            <div className='Ficon'>
                                <ThumbsUp size={25} onClick={addLiked} style={styles.likes}/>
                            </div>
                            <div className='Ficon'>
                                <Trash size={25} onClick={(e) => deleteQuote(newq.id)}/>
                            </div>
                        </div>
                            
                    </li>
                )})
                }
            </ul>
            }
        

    </div>

  )
}

export default Featured