import React , { useContext } from 'react'
import { QuoteContext } from "../../../blog-context/context"
import { ThumbsUp, Trash } from "phosphor-react"

const Liked = () => {
  const { like , quote, addLiked , deleteQuote } = useContext( QuoteContext )
  const styles = {
    likes: {
        color: like ? "red" : "black"
    }
  };
  return (
    <>
    <div>
      {
        like ?
        quote.map((newq) => {
          return (
            <li key={newq.id} >
              <p>{newq.blogC}</p>
              <ThumbsUp onClick={addLiked} style={styles.likes}/>
              <br />
              <Trash onClick={(e) => deleteQuote(newq.id)}/>
            </li>
          )
        })
        :
        <h3>Doesn't work on me?!</h3>
      }
    </div>
    </>
  )
}

export default Liked