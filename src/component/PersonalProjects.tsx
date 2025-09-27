import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { personalProjects } from "@/constants/information";
import Image from "next/image";
import "./PersonalProjects.scss"
import "../../public/images/LCBanner.jpeg"
import Link from "next/link";
import { PersonalProjectType } from "@/types";


const PersonalProjects = ()=>{

    const [activeProjectId, setActiveProjectId] = useState<number>(1);
    const [readMoreModal, setReadMoreModal] = useState<number|null>(null);

    const proj = personalProjects[activeProjectId -1 ];

    // setInterval(()=>{
        // nextProject()
    // },5000)

    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        if (e.target instanceof HTMLElement && e.target.className === 'read-more-modal') {
            setReadMoreModal(null);
        };
    };
    
    function prevProject(){
        if (activeProjectId -1 < 1) {
            setActiveProjectId(personalProjects.length);
            return
        };
        setActiveProjectId(activeProjectId - 1);
    };

    function nextProject(){
        if (activeProjectId +1 > personalProjects.length) {
            setActiveProjectId(1);
            return
        };
        setActiveProjectId(activeProjectId + 1);
    };
    


        

    return(
        <>
        {readMoreModal !== null &&
            <div className="read-more-modal" onClick={(e)=>closeModal(e)}>
                <div className="content-body">
                    <h1 className="header">{proj.name}</h1>
                    <div className="description">
                        <p>
                            {proj.description}

                        </p>
                    </div>
                    <div className="buttons">
                        <Link href={proj.repoUrl} target="blank">
                        
                        <button className="repo-link-btn">Code <FaCode className="btn-ico" /></button>
                        </Link>
                        {proj.link !== null ?
                        <Link href={proj.link} target="blank">
                        
                        <button className="live-link-btn">Link <HiExternalLink className="btn-ico" /></button>
                        </Link>:
                        <button className="inactive-link-btn">Suspended<MdSignalWifiConnectedNoInternet0 className="btn-ico" /></button>
                        }
                    </div>
                </div>
            </div>
        }
            <div className="projects">
                <div className="project" key={proj.id} /*onClick={()=>setReadMoreModal(proj.id)}*/>
                    <div className="project-image">
                        <Image src={`/images/${proj.imageFileName}`} alt={""} width={200} height={100}/>

                    </div>
                    <div className="description">
                        <p>
                            {proj.description.slice(0,200)}
                            {proj.description.length > 200 && '...  '}
                        </p>
                            {proj.description.length > 200 &&(<p className="read-more" onClick={()=>setReadMoreModal(proj.id)}>Read More</p>)}
                    </div>
                    <div className="buttons">
                        <Link href={proj.repoUrl} target="blank">
                        
                        <button className="repo-link-btn">Code <FaCode className="btn-ico" /></button>
                        </Link>
                        {proj.link !== null ?
                        <Link href={proj.link} target="blank">
                        
                        <button className="live-link-btn">Link <HiExternalLink className="btn-ico" /></button>
                        </Link>:
                        <button className="inactive-link-btn">Suspended<MdSignalWifiConnectedNoInternet0 className="btn-ico" /></button>
                        }
                    </div>
                </div>
                <div className="nav-buttons">
                    <div className="buttons-container">
                        <span className="prev-button" onClick={()=>prevProject()}>
                            <GrCaretPrevious />
                        </span>

                        {personalProjects.map((val: PersonalProjectType)=>{
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