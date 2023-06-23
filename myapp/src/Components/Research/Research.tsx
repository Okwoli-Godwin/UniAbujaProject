import React, { useEffect } from 'react'
import styled from 'styled-components'
import img from "../Assets/boss.jpg"
import img3 from "../Assets/two.jpeg"
import img4 from "../Assets/three.jpeg"
import img5 from "../Assets/rep1.jpeg"
import img6 from "../Assets/rep2.jpeg"
import img7 from "../Assets/baba.jpeg"
import img8 from "../Assets/aba.jpeg"
import img9 from "../Assets/ojike.jpeg"
import img10 from "../Assets/wole.jpeg"
import img11 from "../Assets/pami.jpeg"
import img12 from "../Assets/blessing.jpeg"
import img13 from "../Assets/esther.jpeg"
import img14 from "../Assets/faiza.jpeg"
import img15 from "../Assets/ridone.jpeg"
import img16 from "../Assets/fri.jpeg"
import img17 from "../Assets/gift.jpeg"
import img18 from "../Assets/lati.jpeg"
import img19 from "../Assets/ebule.jpeg"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import Header from '../Header'
import Footer from '../Footer/Footer'
import {BiDotsVerticalRounded} from "react-icons/bi"

interface MyData{
    id: string,
    image: string,
    title: string,
    section: string,
    summary: string
}

const Research: React.FC = () => {

    const [imageData, setImageData] = React.useState<MyData[]>([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [postPerPage, setPostPerPage] = React.useState(15)
    const [del, setDel] = React.useState(false)
    const [remove, setRemove] = React.useState(false)

    const Delete = () => {
        setDel(!del)
    }

    const ReadData = async () => {
        await axios
            .get("http://localhost:3030/api/image/getall")
            .then((res) => {
                setImageData(res.data.data)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)

                return err;
            })
    }

    const DeleteData = async (id: any) => {
        await axios
            .get(`http://localhost:3030/api/image/Delete/${id}`)
            .then((res) => {
                setRemove(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => {
                console.log(err)

                return err;
            })
    }

    useEffect(() => {
        ReadData();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = imageData.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Container>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <Text>Our Undergraduate Researchers</Text>
        <P>It is a Catch Them Young approach to help promote research culture among undergraduate students in University of Abuja</P>
          {currentPosts?.map((props) => (
            <Wrapper >
            
            <Box>
                <Up>
                    <Img  />
                </Up>
                  <Down2>
                          <Icons><BiDotsVerticalRounded /></Icons>
                          {del ? (
                          <Dele>
                          <h3>Delete</h3>
                      </Dele>
                      ) : null}
                          <Data><span></span><br /><p>Medicine & Surgery</p> <h5>Research: Bridging the gap between blood donors and patients through BetaLife mobile application</h5></Data>
                <New>Researcher 🥉</New>
                    {/* <New>Rs: 2021</New> */}
                </Down2>
              </Box>
              <Box2>
                <Up>
                    <Img src={img5} />
                </Up>
                <Down5>
                      <Icons onClick={Delete}><BiDotsVerticalRounded /></Icons>
                      {del ? (
                          <Dele>
                          <h3>Delete</h3>
                      </Dele>
                      ) : null}
                    <Data><span>Kenneth Ezurike </span><br /><p> Clinical Sciences</p> <h5>Research: Cardiovascular Disease Risk among Undergraduates in University of Abuja</h5></Data>
                <New>Researcher 🥉</New>
                </Down5>
              </Box2>
            <Box>
                <Up>
                    <Img src={img} />
                    
                </Up>
                <Down>
                    <Data><span>Okwoli Mathew</span><br /><p>Computer Science</p> <h5>Research: Development of campus mobile application for University of Abuja</h5></Data>
                <New>Researcher 🥉</New>
                </Down>
            </Box>
            <Box2>
                <Up>
                    <Img  src={img7}/>
                </Up>
                <Down6>
                    <Data><span>Babalola Matthew </span><br /><p>Animal Science</p> <h5>Research:  Performance characteristics of noiler chicken fed graded level of maize cob and groundnut shell marsh</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                      <Img src={img16  }/>
                </Up>
                <Down6>
                    <Data><span>Mathew Friday </span><br /><p>Crop Protection</p> <h5>Research: Production of seed dressing fungicide from garlic (Alliun sativum L)</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                      <Img src={ img15} />
                </Up>
                <Down6>
                    <Data><span>Sulaiman Ridwan Olanrenwaju</span><br /><p>Veterinary Medicine</p> <h5>Research: Heavy metals bioaccumulation and risk assessment in earthen pond-raised clarias gariepinus in Gwagwalada and its environs, Abuja, Nigeria</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img6} />
                </Up>
                <Down6>
                    <Data><span>Benson Joel Emmanuel  </span><br /><p>Animal Science</p> <h5>Research: Creation of a food technology software titled “NO HUNGER APP”</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                      <Img src={ img19} />
                </Up>
                <Down6>
                    <Data><span>Okonkwo Heritage Ebuka</span><br /><p>Medicine & Surgery</p> <h5>Research: A novel technique for determining handedness in primary school children in Abuja</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                      <Img src={ img18} />
                </Up>
                <Down6>
                    <Data><span>Mobolaji Abdulateef Ayoola</span><br /><p>Veterinary Medicine</p> <h5>Research: Ethanolic leave extract of ageratum conyzoides in streptozotocin-nicotinamide induced type-II diabetes in rats</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img3}/>
                </Up>
                <Down6>
                    <Data><span>Obomighie Godsevidence.</span><br /><p>Medicine & Surgery</p> <h5>Research:  Personal and hostel hygiene among students of University of Abuja and its implication on their overall wellbeing and academics</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img9} />
                </Up>
                <Down6>
                    <Data><span>Cherith Aimionowane</span><br /><p>Medicine & Surgery</p> <h5>Research: Prevalence of obesity and overweight and associated risk factors among staff of the University of Abuja, Nigeria</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                      <Img src={ img17} />
                </Up>
                <Down6>
                    <Data><span>Ogbu Chibuikem Godsgift</span><br /><p>Medicine & Surgery</p> <h5>Research:  Depression and academic performance among human and veterinary medical students of University of Abuja</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  src={img11}/>
                </Up>
                <Down6>
                    <Data><span> Pam Helen David </span><br /><p>Agricultural Extension </p> <h5>Research:  Overcoming low shelf life and odor of cassava wet akpu by processing into dried powder form (“poundo Akpu”)</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  src={img10}/>
                </Up>
                <Down6>
                    <Data><span> Ojewole Grace Oluwaseun. </span><br /><p>Agricultural Extension </p> <h5>Research:   Overcoming low shelf life and odor of cassava wet akpu by processing into dried powder form (“poundo Akpu”)</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  src={img12}/>
                </Up>
                <Down6>
                    <Data><span>Chukwu blessing </span><br /><p>Animal science </p> <h5>Research: Performance characteristics of noiler chicken fed graded level of maize cob and groundnut shell marsh</h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  src={img13}/>
                </Up>
                <Down6>
                    <Data><span>Ozioma Esther  </span><br /><p>Clinical science </p> <h5>Research: Cardiovascular Disease Risk among Undergraduates in University of Abuja</h5></Data>

                <New>Researcher  🥉</New>
                </Down6>
            </Box2>
             <Box2>
                <Up>
                    <Img  src={img14}/>
                </Up>
                <Down6>
                    <Data><span>Faiza Doyinsola  </span><br /><p>Clinical science </p> <h5>Research: Cardiovascular Disease Risk among Undergraduates in University of Abuja</h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  src={img4}/>
                </Up>
                <Down6>
                    <Data><span>Oyeleye Blessing Simon </span><br /><p>Clinical science </p> <h5>Research: Bacteria associated with milk and milk products sold on campus of university of Abuja, Nigeria</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img  src={img8}/>
                </Up>
                <Down6>
                    <Data><span>Abayomi Phebe Oluwatosin</span><br /><p>Veterinary Medicine</p> <h5>Research: Bacteria associated with milk and milk products sold on campus of university of Abuja, Nigeria</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Abayomi Phebe Oluwatosin </span><br /><p>Clinical science </p> <h5>Research: Bacteria associated with milk and milk products sold on campus of university of Abuja, Nigeria</h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
              </Box2>
               <Box>
                <Up>
                    <Img  />
                </Up>
                <Down3>
                    <Data><span>Shuaib Abdulsalam Olaitan</span><br /><p>Agricultural Science</p> <h5>Research: Reducing tomato fruit wastage using tomato powder as a means of preservative</h5></Data>
                <New>Researcher 🥉</New>
                </Down3>
            </Box>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down4>
                    <Data><span>Ogbu Collins </span><br /><p>Law</p> <h5>Research: Institutional panacea to protracted criminal litigations in Nigeria within the context of the administration of criminal justice act, 2015</h5></Data>
                <New>Researcher 🥉</New>
                </Down4>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down4>
                    <Data><span>John k. musa </span><br /><p>Law</p> <h5>Research: Institutional panacea to protracted criminal litigations in Nigeria within the context of the administration of criminal justice act, 2015</h5></Data>
                <New>Collaborator 🥉</New>
                </Down4>
            </Box2>
               <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Aiyedero Mercy Oluwaseun</span><br /><p>Veterinary Medicine</p> <h5>Research: Assessment of the hygienic condition of food canteen at the University of Abuja</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Muhammad Halima</span><br /><p>Veterinary Medicine</p> <h5>Research: Assessment of the hygienic condition of food canteen at the University of Abuja</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Onigbinde Collins Oluwasegun </span><br /><p>Electrical Engineering</p> <h5>Research: Institutional panacea to protracted criminal litigations in Nigeria within the context of the administration of criminal justice act</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Victor Ejevronbu </span><br /><p>Electrical Engineering</p> <h5>Research: Institutional panacea to protracted criminal litigations in Nigeria within the context of the administration of criminal justice act</h5></Data>

                <New>Collaborator🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Owolabi Fuhad Nurudeen</span><br /><p>Agricultural Economics</p> <h5>Research:Mushroom production as food security in Gwagwalada, Abuja Metropolis.</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Festus Adetifa Ayodeji</span><br /><p>Agricultural Economics</p> <h5>Research:Mushroom production as food security in Gwagwalada, Abuja Metropolis</h5></Data>

                <New>Collaborator🥉</New>
                </Down6>
              </Box2>
               <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Asarivwo Elijah Ogenedoro </span><br /><p>Crop Protection</p> <h5>Research: Production of seed dressing fungicide from garlic (Alliun sativum L)</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Olajimbiti Christiana Ololade</span><br /><p>Veterinary Medicine</p> <h5>Research: Heavy metals bioaccumulation and risk assessment in earthen pond-raised clarias gariepinus in Gwagwalada and its environs, Abuja, Nigeria</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>
               <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Isa Adam Olamide</span><br /><p>Veterinary Medicine</p> <h5>Research: Assessment of concentration of heavy metals and polycyclic aromatic hydrocarbons in roasted-meat (suya) in University of Abuja campus</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Okunlola Basit Oyebanji</span><br /><p>Veterinary Medicine</p> <h5>Research: Assessment of concentration of heavy metals and polycyclic aromatic hydrocarbons in roasted-meat (suya) in University of Abuja campus</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Oboh pedro Onosetale</span><br /><p>Computer Science</p> <h5>Research: Application of IOT based smart irrigation system in agriculture: a case study of University of Abuja, Faculty of Agricultural science farmland</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Olaniyan Abdullahi Akintoye</span><br /><p>Agricultural Science</p> <h5>Research: Reducing tomato fruit wastage using tomato powder as a means of preservative</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Omerah Raphael Attah</span><br /><p>Veterinary Medicine</p> <h5>Research: Elucidating the neuro-regenerative potential of combined therapy of allium sativum and folic acid in experimentally</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
              </Box2>
              <Box2>
                <Up>
                    <Img />
                </Up>
                <Down6>
                    <Data><span>Ochem Uzorchukwu Michael</span><br /><p>Medicine & Surgery</p> <h5>Research:  Depression and academic performance among human and veterinary medical students of University of Abuja.</h5></Data>

                <New>Collaborator 🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img />
                </Up>
                <Down6>
                    <Data><span>Afolabi victor </span><br /><p>Vetenary Medicine</p> <h5>Research: Bacteriological analysis of coliform bacteria from drinking water sources in University of Abuja male and female hostels, permanent site, Abuja. FCT</h5></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
              <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Ibrahim Dauda Abdulrahman  </span><br /><p>Clinical science </p> <h5>Research: Development of Uniabuja electronic document management system on blockchain technology</h5></Data>

                <New>Researcher  🥉</New>
                </Down6>
            </Box2>
            <Box2>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Muhammad Shamsudeen Ibrahim  </span><br /><p>Clinical science </p> <h5>Research: Development of Uniabuja electronic document management system on blockchain technology</h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
            </Box2>
            <Box3>
                <Up>
                    <Img  />
                </Up>
                <Down6>
                    <Data><span>Muhammad Shamsudeen Ibrahim  </span><br /><p>Clinical science </p> <h5>Research: Development of Uniabuja electronic document management system on blockchain technology</h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
            </Box3>
        </Wrapper>
        ))} 
        <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>

        </NavLink>
        <Footer />
    </Container>
  )
}

export default Research
const Dele = styled.div`
    width: 120px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    right: 55px;
    display: flex;
    margin-top: 7px;
    justify-content: center;
    align-items: center;
    h3{
        color: #219653;
        cursor: pointer;
    }
`
const Icons = styled.div`
    color: #fff;
    font-size: 24px;
    margin-left: 310px;
    display: flex;
    margin-top: -20px;
    /* background-color: red; */
    cursor: pointer;
`
const Button2 = styled.div`
    height: 60px;
    width: 250px;
    background-color:  #00A85A;
    display: flex;
    margin-top: 50px;
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
    @media screen and (max-width: 425px) {
        margin-top: 10px;
    }
`;
const Boot = styled.div`
    width: 200px;
    height: 30px;
    background-color: red;
    position: absolute;
    bottom: 40px;
`
const New = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid #00A85A;
    background-color: white;
    cursor: pointer;
    position: absolute;
    color: #00A85A;
    align-items: center;
    display: flex;
    /* padding-right: 20px; */
    justify-content: center;
    border-radius: 50px;
    bottom: 515px;
    right: 260px;
    @media screen and (max-width: 1024px) {
        right: 340px;
    }
    @media screen and (max-width: 768px) {
        right: 220px;
    }
    @media screen and (max-width: 425px) {
        right: 205px;
        bottom: 500px;
    }
    @media screen and (max-width: 320px) {
        right: 180px;
        bottom: 475px;
    }
`
const Icon = styled.div`
    margin-left: 25px;
    margin-top: 5px;
`
const View = styled.div`
    line-height: 1.75rem;
    font-size: 1.125rem;
    display: flex;
    margin-top: 20px;
`
const Data = styled.div`
    h5{
        margin: 0px;
        font-weight: 500;
        font-size: 15px;
        margin-top: 10px;
        line-height: 20px;
    }
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: -15px;
    /* background-color: red; */
    width: 315px;
    p{
        margin: 0;
        font-size: 15px;
    }
    span{
        font-weight: bolder;
        font-size: 18px;
        line-height: 2rem;
        text-align: center;
        @media screen and (max-width: 320px) {
            font-size: 19px;
            text-align: center;
        }
    }
   
`
const Down = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down2 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down3 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 30px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down4 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down5 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down6 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`
const Down7 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #10A662;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
`
const Down8 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #000269;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    
`
const Img = styled.img`
    transition: all 350ms;
    object-fit: cover;
    width: 100%;
    height: 500px;
    cursor: pointer;
    :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    }
`
const Up = styled.div`
    width: 100%;
    height: 60%;
    overflow: hidden;
    :hover{
        
    }
`
const Box = styled.div`
    width: 390px;
    height: 490px;
    overflow: hidden;
    border-radius: 10px;
    margin: 5px;
    margin-bottom: 35px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 445px) {
        width: 100%;
    }

`
const Box2 = styled.div`
    width: 390px;
    height: 490px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 445px) {
        width: 100%;
    }

`
const Box3 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
    visibility: hidden;
`
const Box4 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
    visibility: hidden;
`
const P = styled.div`
    font-size: 1.125rem;
    width: 85%;
    line-height: 1.75rem;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    color: #000000;
    /* background-color: red; */
    margin-top: -8px;
    @media screen and (max-width: 425px) {
        font-size: 17px;
        text-align: center;
        line-height: 1.65rem;
    }
    @media screen and (max-width: 320px) {
        font-size: 15px;
        text-align: center;
        line-height: 1.65rem;
        width: 80%;
        padding-left: 20px;
        padding-right: 20px;
    }
`
const Text = styled.h2`
    font-weight: 600;
    /* text-align: center; */
    line-height: 1.25;
    font-size: 3rem;
    color: #00A85A;
    @media screen and (max-width: 445px) {
        font-size: 32px;
        text-align: center;
    }
`
const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 425px) {
        margin-top: 30px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-top: 140px; */
    padding-bottom: 20px;
`