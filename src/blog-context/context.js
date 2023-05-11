import { createContext, useState} from 'react'

export const QuoteContext = createContext(null);

export const  QuoteContextProvider = (props) => {

    const [ quote , setQuote]  = useState([]);
    const  [content , setContent]  = useState("");
    const [ likedQuotes , setLikedQuotes ] = useState([]);

    
    const addQuote = (blogCont) => {

        const newQuote = {
            id: Math.random(),
            blogC: blogCont,
        }
        if ( content === "" ) {
            alert('you must be silly!')
        } else {
            setQuote([ newQuote , ...quote ]);
            console.log(newQuote)
            setContent("");
            alert('good! quote has been sent!')
        }
    }
    // I'm trying to add each liked quote into another array "likedQuotes" but it's not working.
    // If you can do it,just go ahead cause i've tried my best and idk where the error is coming from. Thank you.
    const addLiked = (id) => {
        const likedQuote = quote.find( q => q.id === id );
        console.log(likedQuote);
        console.log(likedQuotes);
        setLikedQuotes(likedQuote);
        alert("it didn't work!")
        // if (likedQuote) {
        //     setLikedQuotes(likedQuote);
        //     alert("liked!")
        // } else {
        //     alert("it didn't work!")
        // }
    }
    // function addLiked(likedQuote) {
    //     setLikedQuotes(...likedQuotes , likedQuote)
    // }

    const deleteQuote = (id) => {
        const newQuote = quote.filter((q) => q.id !== id)
        setQuote(newQuote);
        alert("Quote deleted");
    }

    const context = {
        quote,
        content,
        setContent,
        addQuote,
        deleteQuote,
        addLiked,
    }

    return (
        <QuoteContext.Provider value={ context }>
            { props.children }
        </QuoteContext.Provider>
    )
}

export default QuoteContext