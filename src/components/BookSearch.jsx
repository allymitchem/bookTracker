import React, {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { getBook } from "../api/books"

const BookSearch = ({list}) => {
    const [searchString, setSearchString] = useState("")

    // function handleSearch(book, text) {

    //    console.log("hello")
    //     return data
    // }
    async function handleSearch() {
        await getBook(searchString.toLowerCase())

    }

handleSearch()

    return (
        <>
            <div id="bookSearch">
                <h2>Search me</h2>
            </div>
            <input
                type="search"
                placeholder=" 🔍 Search by Title or Author"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            {/* {searchString.length ? 
            <div className="display_books">
                    {booksToDisplay.length &&
                        booksToDisplay.map((elem) => console.log("it has length")
                    //     <p> { elem.title }
                    // })}</p><img className="book_image" src={elem.cover_edition_key}></img>           :
            )}
            </div>
            :null} */}

        </>
    )
}

export default BookSearch
