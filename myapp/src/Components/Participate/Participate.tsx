import React from 'react'
import styled from 'styled-components'
import images from "../Assets/mat1.jpg"
import images2 from "../Assets/edu.jpeg"
import images3 from "../Assets/mat1.jpg"
import {GrCheckmark} from "react-icons/gr"

const Find = () => {
  return (
    <Container>
        
        
        <Wrapper fd="">
            <Left>
                <Images src={images2} />
            </Left>
            <Right>
                <Up2><h2>WHO CAN PARTICIPATE?</h2></Up2>
                <P>Eligibility</P>
                <Nav2>
                    <ul>
                        <li>All University of Abuja undergraduate students are eligible to apply for CUR Grant</li>
                        <li>A team can consist of 1 to 4 undergraduate students of University of Abuja</li>
                        <li>Team members must be registered students who are not graduating during the current academic session</li>
                    </ul>
                </Nav2>
                {/* <Nav2><Icons><GrCheckmark /></Icons> Dream of great ideas</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Think critically</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Stand out</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Find solutions to national/international issues and challenges</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Change the narrative and make meaningful impact on the society.</Nav2> */}
                <Up2><h2>WHEN CAN STUDENTS PARTICIPATE?</h2></Up2>
                <Nav2>
                    <ul>
                        <li>Forms are available every semester</li>
                        <li>CUR is a continuous year round program that students can participate in</li>
                        <li>Undergraduate Research Day is a CUR day event where students present proposals and or research findings every semester</li>
                    </ul>
                </Nav2>
                {/* <Nav2><Icons><GrCheckmark /></Icons>CUR is a continuous year round program that students can participate in.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Undergraduate Research Day is a CUR day event where students present proposals and or research findings every semester.</Nav2> */}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const P = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const Icons = styled.div`
    margin-right: 10px;
`

const Nav2 = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    margin-bottom: 10px;
    }
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

const Up2 = styled.div`
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
    font-size: 25px;
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
    margin-left: 80px;
`

const Up = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    margin-left: 80px;
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
    object-fit: contain;
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