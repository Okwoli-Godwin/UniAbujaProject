import React from 'react'
import styled from 'styled-components'
import Career from '../Career/Career'
import Footer from '../Footer/Footer'
import Header from '../Header'

import Slide from '../Slide/Slide'
import Vision from '../Vision/Vision'
import Adminhead from "../Adminhead/Adminhead"

const Homescreen = () => {
  return (
    <div>
        <br />
        <Vision />
        <br />
        <Career />
        <Slide />
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