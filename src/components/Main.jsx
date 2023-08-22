import React from "react" 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {BookSearch} from './'

const Main = () => {
    return (
        <Router>
            <div id="main">
                <h2>HI.  It's Me.  I'm the problem.</h2>
            <BookSearch/>
            </div>
        </Router>
    )

}

export default Main