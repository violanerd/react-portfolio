import React, { useState } from "react";
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import NavTabs from './NavTabs'

function Container() {
    
    const [currentPage, setCurrentPage] = useState('About')
    function renderPage(){
        if(currentPage === 'About'){
            return <About></About>
        }
        if(currentPage === 'Contact'){
            return <Contact></Contact>
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio></Portfolio>
        }
        if(currentPage === 'Resume'){
            return <Resume></Resume>
        }
        return <About></About>
    }

    function handlePage(page){
        setCurrentPage(page)
    }
    return (
        <div>
            <NavTabs handlePage={handlePage} />
            {renderPage()}
        </div>

    )
}
export default Container;