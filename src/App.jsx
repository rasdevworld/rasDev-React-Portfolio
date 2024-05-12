import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
  
    console.log(currentPage)
    if (currentPage === 'About') {
      return <About />;
    }
   if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
      
      {renderPage()}
      <Footer/>
    </>
  )
}

export default App
