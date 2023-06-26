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
                <P><h1>Get Involved</h1></P>
        </Wrapper>
        </Boxhold>
    </Container>
  )
}

export default Hero
const P = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    h1{
        color: white;
    }
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
const Down = styled.div`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 10px;

`
const Up = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #219653;
`
const Hold = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
`
const Numberhold = styled.div`
    display: flex;
    align-items: center;
`
const Padhold = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #219653;
    width: 180px;
`
const Last = styled.div`
    width: 100%;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
`
const Bottomhold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media screen and (max-width: 874px) {
        display: none;
    }
`
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Buttonhold = styled.div`
    /* width: 100%; */
    display: flex;
    margin-top: 70px;
`
const Pf = styled.div`
    font-size: 17px;
    line-height: 1.9rem;
    font-weight: 500;
    width: 100%;
    /* text-align: center; */
    /* color: #fff; */
    margin-top: 45px;
    color: #fff;
    -moz-animation: marquee 30s linear infinite;
        -webkit-animation: marquee 30s linear infinite;
        animation: marquee 30s linear infinite;
    @keyframes marquee {
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 874px) {
        width: 100%;
    }
     @media screen and (max-width: 320px) {
        font-size: 15px;
    }
`
const Top = styled.div`
    width: 100%;
    h1{
        font-size: 47px;
        font-weight: 700;
        line-height: 2.5rem;
        color: #fff;
        margin: 0;
        font-family: "Avenir", sans-serif;
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
const Left = styled.div`
    width: 50%;
    /* height: 130px; */
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    /* background-color: green; */
    @media screen and (max-width: 1180px) {
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