import React from 'react'
import styled from 'styled-components'
import images from "../Assets/mat1.jpg"
import images2 from "../Assets/vect.png"
import images3 from "../Assets/mat1.jpg"
import {GrCheckmark} from "react-icons/gr"

const Center = () => {
  return (
    <Container>
        
        
        <Wrapper fd="">
            <Hold>
                <Up><h2>What is CUR</h2></Up>
                <P><p>Centre for Undergraduate Research (CUR) is a Centre which seeks to develop young researchers through grants from the University of Abuja. It is a Catch Them Young approach to help promote research culture among undergraduate students in University of Abuja. These young researchers are mentored and guided by lecturers on how best to tap into their talents and potentials. Our activities include disbursement of grants to undergraduate researchers to facilitate the actualization of their dreams </p></P>

                <Ups><h2>Our Target</h2></Ups>
                <P><p>All Undergraduate students of University of Abuja who are ready to </p></P>
                <Nav>
                    <ul>
                        <li>Dream of great ideas</li>
                        <li>Think critically</li>
                        <li>Stand out</li>
                        <li>Find solutions to national/international issues and challenges</li>
                        <li>Change the narrative and make meaningful impact on the society</li>
                    </ul>
                </Nav>

                <Ups1><h2>Our Goal</h2></Ups1>
                <Nav>
                    <ul>
                        <li>To turn research findings into entrepreneurial ventures and or enhance entrepreneurial ventures in the society</li>
                        <li>Use research findings to promote National Development through the relevant Government parastatals or agencies</li>
                        <li>Make our undergraduate students become more engaged, creative, innovative, and impactful individuals and citizens from the knowledge and skills learned in the CUR research project</li>
                    </ul>
                </Nav>

                <Ups1><h2>Our Office</h2></Ups1>
                <P><p>The Centre is managed by Professor Taibat Adebukola Atoyebi (Director) and Dr. Dike Ojji (Deputy Director) in consultation with a Consultative Committee which comprises of representatives from various Faculties in the University. Our office is located at RM1-3, Institute for Legislative Studies Building, University Abuja Main Campus Abuja, Federal Capital Territory, Nigeria</p></P>
        
            {/* <Nav><Icons><GrCheckmark /></Icons> <p>All University of Abuja undergraduate students are eligible to apply for CUR Grant.</p></Nav>
              <Nav><Icons><GrCheckmark /></Icons> <p>A team can consist of 1 to 4 undergraduate students of University of Abuja.</p></Nav>
               <Nav><Icons><GrCheckmark /></Icons> <p>Team members must be registered students who are not graduating in the current session.</p></Nav>
            <Nav><Icons><GrCheckmark /></Icons> <p>Centre for Undergraduate Research (CUR) is a centre which seeks to develop young researchers through grants from within and outside the University</p></Nav>
            <Nav><Icons><GrCheckmark /></Icons><p>It is a Catch Them Young approach to help promote research culture among undergraduate students in University of Abuja</p></Nav>
            <Nav><Icons><GrCheckmark /></Icons> <p>These young researchers are mentored and guided by lecturers on how best to tap into their talents and potentials</p></Nav> */}
            </Hold>
            {/* <P><p>The Centre is managed by Professor Taibat Adebukola Atoyebi (Director) and Dr. Dike Ojji (Deputy Director) in consultation with a Consultative Committee which comprises of representatives from various Faculties in the University. </p></P>
            <P><p>Our activities include disbursement of grants to undergraduate researches to facilitate the actualization of their dreams. Our office is located at the Institute for Legislative Studies, University Abuja Main Campus.</p></P> */}
        </Wrapper>
    </Container>
  )
}

export default Center
const Hold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Collection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h3{
        font-size: 19px;
    }
    @media screen and (max-width: 425px) {
        
    }
`
const Dates = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    h1{
        font-size: 30px;
    }
`
const Pe = styled.div`
    margin: 40px;
    p{
        margin: 0;
    }
`
const P = styled.div`
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
`

const Icons = styled.div`
    margin-right: 10px;
    margin-top: 20px;
`

const Nav2 = styled.div`
    color: #132128;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up2 = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`

const Nav = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 20px;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    }
    ul{
        margin-top: -15px;
    }
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    margin-top: 30px;
    /* margin-left: 80px; */
`

const Up = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
    }
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    /* margin-left: 80px; */
`
const Ups = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 425px) {
        font-size: 25px;
    }
    }
    font-size: 32px;
    line-height: 40px;
    /* font-family: 'Inria Serif','Garamond',serif; */
    font-weight: 400;
    color: #132128;
    margin-top: 60px;
    /* margin-left: 80px; */
`
const Ups1 = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 425px) {
        font-size: 25px;
    }
    }
    font-size: 32px;
    line-height: 40px;
    /* font-family: 'Inria Serif','Garamond',serif; */
    font-weight: 400;
    color: #132128;
    margin-top: -15px;
    /* margin-left: 80px; */
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        margin-top: -60px;
    }
`

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
       width: 70%;
    }
    @media screen and (max-width: 425px) {
       width: 100%;
       /* background-color: red; */
    }
`

const Left = styled.div`
    width: 50%;
    /* background-color: red; */
    height: 400px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: -65px;
    }
`

const Wrapper = styled.div<{ fd: string }>`
    width: 90%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    padding-bottom: 80px;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        padding-bottom: 20px;
    }
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`