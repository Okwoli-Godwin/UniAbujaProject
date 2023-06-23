import React from 'react'
import styled from 'styled-components'
import Career from '../Career/Career'
import Footer from '../Footer/Footer'
import Header from '../Header'

import Hrwelcom from '../Hrwelcom/Hrwelcom'
import Join from '../Join/Join'
import Slide from '../Slide/Slide'
import Vision from '../Vision/Vision'

import Bright from "../Bright/Brighter"

const Homescreen = () => {
  return (
    <div>
        <Header />
        
        {/* <Hero /> */}
        <Bright />
        <br />
        <br />
        <br />
        <Vision />
        <br />
        <br />
        <br />
        <br />
        <Hrwelcom />
        <br />
        <Slide />
        <br />
        <br />
        <Join />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default Homescreen

const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: red;
`