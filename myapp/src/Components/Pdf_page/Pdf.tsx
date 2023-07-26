import React from "react";
import styled from "styled-components";
import Header from "../Header";
import img from "../Assets/uniAbuja.jpeg";
import { useQuery } from "@tanstack/react-query"

const Pdf = () => {

  const data = useQuery({
    queryFn: ReadPdf,
    querykey: ["allpdf"]
  })
  return (
    <Container>
      <Header />
      <Wrapper>
        <Top>
          <Img src={img} />
          <Left>
            <Text>
              Hello Welcome to <span>Center for Undergraduate Research.</span>{" "}
              Download Pdf files
            </Text>
          </Left>
        </Top>

        <Down>
          <Box>
            <Up></Up>
            <Button>Download</Button>
          </Box>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Pdf;
const Button = styled.button`
  background-color: #357edd;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  width: 115px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Up = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-color: blue;
  /* overflow: hidden; */
  :hover {
  }
`;
const Box = styled.div`
  width: 370px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  margin-bottom: 35px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 1024px) {
    width: 440px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    background-color: #e2e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  span {
    color: #219653;
    font-size: 20px;
  }
`;
const Left = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Img = styled.img`
  height: 150px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding-top: 50px;
  padding-bottom: 90px;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    padding-top: 10px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
