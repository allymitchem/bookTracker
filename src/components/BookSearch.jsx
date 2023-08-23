import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { getBook } from "../api/books"

const BookSearch = () => {
    const [searchString, setSearchString] = useState("")
    const [searchResults, setSearchResults] = useState([])

    async function handleSearch(event) {
        event.preventDefault();
        console.log("Did this work")
       const books = await getBook(searchString.toLowerCase())
        setSearchResults(books.docs)
    }
    console.log("At this point the results are correct", searchResults)
 
    console.log(searchResults.length)

    return (
        <>
            <div id="bookSearch">
                <h2>Search me</h2>
            </div>
            <form>
                <input
                type="text"
                placeholder=" 🔍 Search by Title or Author"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                />
                <button value="Search" onClick={handleSearch}>            
                </button>                
            </form>
                <div className="display_books">
                    {searchResults.length >=1 && searchResults.map((elem) => <p key={`book_${elem.key}`}>{elem.title}</p>)}
                </div>
        </>
    )
}

export default BookSearch
