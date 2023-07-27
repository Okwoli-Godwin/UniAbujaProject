import React from "react";
import styled from "styled-components";
import Header from "../Header";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import img from "../Assets/uniAbuja.jpeg";
import { useQuery } from "@tanstack/react-query";
import { ReadPdf } from "../Apis/ApiCalls";

const Pdf = () => {
  const { data, isLoading, isError } = useQuery(["pdf"], ReadPdf);

  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <Container>
      <Header />
      <Wrapper>
        <Top>
          <Img src={img} alt="University of Abuja" />
          <Left>
            <Text>
              Hello, Welcome to the <span>Center for Undergraduate Research.</span> Download PDF files
            </Text>
          </Left>
        </Top>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error occurred while fetching data</p>
        ) : (
          <Down>
            {data?.data?.map((e: any) => (
              <Box key={e.id}>
                <Up>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
                    <Viewer fileUrl={e.PDFFile} plugins={[getFilePluginInstance]} />
                  </Worker>
                </Up>
                <a style={{textDecoration: "none"}} href={e.PDFFile} download>
                <Button>Download</Button>
              </a>
              </Box>
            ))}
          </Down>
        )}
      </Wrapper>
    </Container>
  );
};

export default Pdf;

const Button = styled.button`
  background-color: #219653;
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
    width: 90%;
    background-color: #e2e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
  }
`;

const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
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