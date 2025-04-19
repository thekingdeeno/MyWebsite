import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import "./PersonalProjects.scss"


const PersonalProjects = ()=>{

    const [activeProjectId, setActiveProjectId] = useState<number>(Math.round(personalProjects.length /2));

    const proj = personalProjects[activeProjectId -1 ];
    
    function prevProject(){
        if (activeProjectId -1 < 1) {
            setActiveProjectId(personalProjects.length);
            return
        }
        setActiveProjectId(activeProjectId - 1)
        
    }

    function nextProject(){
        if (activeProjectId +1 > personalProjects.length) {
            setActiveProjectId(1);
            return
        }
        setActiveProjectId(activeProjectId + 1);
    }
    


        

    return(
        <>
            <div className="personal-projects">
                <div className="project" key={proj.id}>
                    <div className="project-image">
                        <img src={"https://raw.githubusercontent.com/thekingdeeno/MyWebsite/156a6c2d73bbe9e4e5832b291aac192defea220e/public/images/EbidhaaBannerImage.png"} alt="" />
                    </div>
                    <div className="description">
                        <p>{proj.description}</p>
                    </div>
                    <div className="buttons">
                        <button className="repo-link-btn">Code <FaCode /></button>
                        {proj.link ?
                        <button className="live-link-btn">Link <HiExternalLink /></button>:
                        <button className="inactive-link-btn">Deployment Suspended  <MdSignalWifiConnectedNoInternet0 /></button>
                        }
                    </div>
                </div>
                <div className="nav-buttons">
                    <span className="prev-button" onClick={()=>prevProject()}>
                        <GrCaretPrevious />
                    </span>

                    {personalProjects.map((val: any, index)=>{
                        return(
                            <span key={val.id} onClick={()=>setActiveProjectId(val.id)}>
                                {(val.id === activeProjectId) ?
                                    <GoDotFill /> :
                                    <GoDot />
                                }
                            </span>
                        )
                    })

                    }
                    <span className="next-button" onClick={()=>{nextProject()}}>
                        <GrCaretNext onClick={()=>console.log('next')
                        }/>
                    </span>

                </div>
            </div>
        </>
    )

}

export default PersonalProjects;


const personalProjects = [
    {
        id: 1,
        name: "Wando Communications - v1",
        description: "During my time working under a Senior Engineer, they contributed to backend development by creating and maintaining APIs for CRUD operations using Node.js and Fastify.",
        image: "https://raw.githubusercontent.com/thekingdeeno/MyWebsite/156a6c2d73bbe9e4e5832b291aac192defea220e/public/images/EbidhaaBannerImage.png",
        repoUrl: "https://github.com/thekingdeeno/Wando",
        link:""
    },
    {
        id: 2,
        name: "Deeno Cryptodata",
        description: "under a Senior Engineer, they contributed to backend development by creating and maintaining APIs for CRUD operations using Node.js and Fastify.",
        image:"",
        repoUrl: "https://github.com/thekingdeeno/Deeno-CryptoData",
        link:null
    },
    {
        id: 3,
        name: "Weather.io",
        description: "they contributed to backend development by creating and maintaining APIs for CRUD operations using Node.js and Fastify.",
        image:"",
        repoUrl: "https://github.com/thekingdeeno/Weather.io",
        link:""
    },
    {
        id: 4,
        name: "Taxi Booking System - (in Java)",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/Java-Taxi-Service",
    },
    {
        id: 5,
        name: "Wando - v2 (Mobile App)",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-mobile",
    },
    {
        id: 6,
        name: "Wando - v2 (Backend)",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-backend",
    },
    {
        id: 7,
        name: "Wando - v2 (Web App in NextJS)",
        description: "",
        image: "",
        repoUrl: "",
    },
    {
        id: 8,
        name: "Finance Allocation Dashboard",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/Company-Budget-Allocation-Dashboard",
    },
    {
        id: 9,
        name: "React Native Game App",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/Mobile-App-Game",
    },
    {
        id: 10,
        name: "Mini Online Drum Kit",
        description: "",
        image: "",
        repoUrl: "https://github.com/thekingdeeno/Drum-set-WebApp",
        link: "https://thekingdeeno.github.io/Drum-set-WebApp/"
    },
]