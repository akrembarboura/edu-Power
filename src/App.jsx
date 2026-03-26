import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
const App = () => {
  return (
       <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
