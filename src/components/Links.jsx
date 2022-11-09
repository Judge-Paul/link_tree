import React from 'react'

export default function Links() {
    let slack = "Jadge"
    let books = `http://books.zuri.team/python-for-begineers?ref_id=${slack}`
    return (
        <div className="links">
            <a href="https://twitter.com/paulogebe" id="btn_zuri">Twitter Link</a>
            <a href="https://training.zuri.team" id="btn_zuri">Zuri Team</a>
            <a href={books} id="books"> Python Books</a>
            <div className= "subtext">
                Get this beginner friendly book on Python
            </div>
            <a href="http://books.zuri.team" id="books"> Zuri Books</a>
            <div className= "subtext">
                This is where you can find books about coding and design
            </div>
            <a href="https://background.zuri.team" id="pitch"> Background Check for Coders</a>
            <div className= "subtext">
                Don't be deceived. Background checks on developers with ease.
            </div>
            <a href="https://books.zuri.team/design-rules" id="book_design">Design Books</a>
            <a href="contact" id="contact">Contact Me</a>
        </div>
    )
}
