import React from 'react'
import styled from 'styled-components'
import uni from "../Assets/unib.png"
import mapsnip from "../Assets/focus.jpg"
import { NavLink } from 'react-router-dom'
import group from "../Assets/group.jpeg"
import Header from '../Header'
import Marquee from 'react-fast-marquee'

const Hero = () => {
  return (
    <Container>
        <Boxhold>
            <Wrapper>
                <Top><h1>Faculty and Staff</h1></Top>
        </Wrapper>
        </Boxhold>
    </Container>
  )
}

export default Hero
const P = styled.div`
    width: 100%;
    p{
        font-size: 25px;
        color: white;
        text-align: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: 170px;
    }
`
const Boxhold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 425px) {
        /* margin-top: 170px; */
        padding-top: 10px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Imagehold = styled.div`
    width: 450px;
    height: 500px;
    overflow: hidden;
    background-color: white;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media screen and (max-width: 768px) {
        height: 430px;
        width: 420px;
    }
    @media screen and (max-width: 768px) {
        height: 400px;
        width: 390px;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    @media screen and (max-width: 874px) {
        margin-top: 35px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 1180px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-top: 45px;
    }
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    h1{
        font-size: 33px;
        font-weight: 700;
        line-height: 2.5rem;
        color: #fff;
        margin: 0;
        
        /* font-family: "Avenir", sans-serif; */
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
        @media screen and (max-width: 425px) {
        font-size: 30px;
        text-align: center;
    }
    @media screen and (max-width: 375px) {
        font-size: 27px;
    }
        @media screen and (max-width: 320px) {
        font-size: 25px;
    }
    }
    @media screen and (max-width: 874px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    /* background-color: red; */
    padding-top: 190px;
    padding-bottom: 220px;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px) {
        padding-top: 10px;
    }
    @media screen and (max-width: 375px) {
        padding-top: 0px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background-image: url(${group});
    /* background-position: center;
    background-repeat: no-repeat; */
    /* background-size: cover; */
`