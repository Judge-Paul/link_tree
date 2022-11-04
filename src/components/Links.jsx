import React from 'react'

export default function Links() {
    let slack = "Jadge"
    let books = `http://books.zuri.team/python-for-begineers?ref_id=${slack}`
    return (
        <div className="links">
            <a href="https://twitter.com/paulogebe" id="btn_zuri">Twitter Link</a>
            <a href="https://training.zuri.team" id="btn_zuri">Zuri Team</a>
            <a href={books} id="books"> Python Books
                <div className= "subtext">
                    Get this beginner friendly book on Python
                </div>
            </a>
            <a href="http://books.zuri.team" id="books"> Zuri Books
                <div className= "subtext">
                    This is where you can find books about coding and design
                </div>
            </a>
            <a href="https://background.zuri.team" id="pitch"> Background Check for Coders
                <div className= "subtext">
                    Make background checks with ease
                </div>
            </a>
            <a href="https://books.zuri.team/design-rules" id="book_design">Design Books</a>
            <a href="#" id="contact">Contact Me</a>
        </div>
    )
}
