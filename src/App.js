import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar.js'
const App = () => {
  return (
    <div>
      <Container>
      <Navbar/>
      </Container>
    </div>
  )
}


const Container = styled.div`
  background: #523886;
  height : 100vh;
`
export default App
