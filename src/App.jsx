import React from 'react'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'
import Form from './components/Form'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Profile />
                        <Links />
                        <Footer />
                    </div> 
                } />
                <Route path="/Contact" element={
                    <div>
                        <Form />
                        <Footer />
                    </div>
                } />
            </Routes>
        </Router>
    )
}