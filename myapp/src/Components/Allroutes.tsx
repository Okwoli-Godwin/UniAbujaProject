import React from 'react'
import {useRoutes} from "react-router-dom"
import About from './About/About'
import Admin from './Admin/Admin'
import Apply from './Apply/Apply'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import Homescreen from './Homescreen/Homescreen'
import Research from './Research/Research'
import Signin from './SignIn/SignIn'
import Signup from "./Signup/Signup"
import UploadPage from './UploadPage/UploadPage'
import Journal from './Journal/Journal'
import Team from './Team/Team'
import Eligibility from './Eligibility/Eligibility'
import Submission from './Sumission/Submission'
import Guideline from './Guideline/Guideline'
import Review from './Review/Review'
import Dashboard from './Dashboard/Dashboard'
import Uploadgallery from './UploadPage/Uploadgallery'
import UploadText from './UploadPage/UploadText'
import AdminResearch from './Research/AdminResearch'

const Allroutes = () => {
    let element = useRoutes([
        {
            path: "/",
            children: [
                {
                    index: true,
                    element: <Homescreen />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/gallery",
                    element: <Gallery />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/upload",
                    element: <UploadPage />
                },
                {
                    path: "Apply",
                    element: <Apply />
                },
                {
                    path: "/research",
                    element: <Research />
                },
                {
                    path: "/guideline",
                    element: <Guideline />
                },
                {
                    path: "/review",
                    element: <Review />
                },
                {
                    path: "/jur",
                    element: <Journal />
                },
                {
                    path: "/submission",
                    element: <Submission />
                },
                {
                    path: "/team",
                    element: <Team />
                },
                {
                    path: "/eligibility",
                    element: <Eligibility />
                },
                {
                    path: "/admin",
                    children: [
                        {
                            index: true,
                            element: <Signin />
                        },
                    ]
                },
            ]
        },
        {
            path: "/signin",
             element: <Signin />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/Adminhome",
            element: <Admin />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/galleryupload",
            element: <Uploadgallery />
        },
        {
            path: "/uploadtext",
            element: <UploadText />
        },
        {
            path: "/adminresearch",
            element: <AdminResearch />
        }
    ])
  return element
}

export default Allroutes