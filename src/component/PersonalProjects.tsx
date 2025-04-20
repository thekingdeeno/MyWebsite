import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { personalProjects } from "@/constants/information";

import "./PersonalProjects.scss"


const PersonalProjects = ()=>{

    const [activeProjectId, setActiveProjectId] = useState<number>(1);

    const proj = personalProjects[activeProjectId -1 ];

    // setInterval(()=>{
        // nextProject()
    // },5000)
    
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
            <div className="projects">
                <div className="project" key={proj.id}>
                    <div className="project-image">
                        <img src={"https://raw.githubusercontent.com/thekingdeeno/MyWebsite/156a6c2d73bbe9e4e5832b291aac192defea220e/public/images/EbidhaaBannerImage.png"} alt="" />
                    </div>
                    <div className="description">
                        <p>{proj.description}</p>
                    </div>
                    <div className="buttons">
                        <button className="repo-link-btn">Code <FaCode className="btn-ico" /></button>
                        {proj.link !== null ?
                        <button className="live-link-btn">Link <HiExternalLink className="btn-ico" /></button>:
                        <button className="inactive-link-btn">Suspended<MdSignalWifiConnectedNoInternet0 className="btn-ico" /></button>
                        }
                    </div>
                </div>
                <div className="nav-buttons">
                    <div className="buttons-container">
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
            </div>
        </>
    )

}

export default PersonalProjects;