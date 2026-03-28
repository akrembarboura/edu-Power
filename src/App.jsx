import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Review from './components/Review'
const App = () => {
  return (
       <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header/>
      <Main/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
