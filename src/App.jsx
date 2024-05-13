import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './assets/sass/tooplate-style.scss'
import NavBar from './components/navbarSection'
import Header from './components/headerSection'
import Footer from './components/footerSection'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'




function App() {
  const [count, setCount] = useState(0)

  const [currentPage, setCurrentPage] = useState('About')

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
  
    console.log(currentPage)
    if (currentPage === 'About') {
      return <About />
    }
   if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <Contact />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  /*const handleDownload = () => {
    console.log("hello download")
    const resumePath = '/resume2024.pdf'
    // Create a hidden anchor element
    const anchor = document.createElement('a')
    anchor.href = resumePath
    anchor.download = 'resume.pdf' // Name of the downloaded file
    anchor.style.display = 'none'
    
    // Append the anchor to the document body
    document.body.appendChild(anchor);
    
    // Simulate a click on the anchor
    anchor.click();
    
    // Clean up: remove the anchor from the document body
    document.body.removeChild(anchor);
  }*/

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
      
      {renderPage()}
      <Footer/>
    </>
  )
}

export default App
