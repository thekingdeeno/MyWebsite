import "./ExperienceCard.scss";
import { useState } from "react";
import { workExperience } from "@/constants/information";
import SideSheet from "./SideSheet";
import Image from "next/image";
import { WorkExperienceType } from "@/types";

type Props = {
    data: WorkExperienceType
}

const ExperienceCard = ({data}: Props)=>{

    const [activeModalId, setActiveModalId] = useState<number | null>(null);

    // function closeModal(e: any){
    //     if (e.target.className === 'experience-detail-overlay') {
    //         setActiveModalId(null)
    //     }
    //     return
    // }

    return(
        <>
        {activeModalId && 
            (
                <div className="experience-detail-overlay">
                    <SideSheet active={activeModalId !== null} onClose={()=>{setActiveModalId(null)}} >
                            <div className="experience-detail-body">
                                <div className="data-container">
                                    <div className="container-heading">
                                    <Image src={(`/images/${data.logoImageUrl}`)} alt="logo image" width={200} height={200} />
                                    </div>
                                    <h2>{data.name}</h2>
                                    <p>{workExperience[activeModalId - 1].description}</p>
                                    <br />
                                    <br />
                                    <h2 className="role-heading">Roles</h2>
                                    <div className="role-points">
                                        <ul>
                                            {data.points.map((point, index) => {
                                                return(
                                                    <>
                                                    <li> -- {point}</li>
                                                    <br />
                                                    </>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </SideSheet>
                </div>
            )
        }
        <div className="experience-card" onClick={()=> setActiveModalId(data.id)}>
            <div className="logo-container">
                <div className="banner-image" >
                    <Image src={(`/images/${data.imageFileName}`)} alt={""} width={200} height={200}/>
                </div>
                <div className="logo-image">
                    <Image src={(`/images/${data.logoImageUrl}`)} alt="logo image" width={200} height={200} />
                </div>
            </div>
            <div className="text-container">
                <h4>{data.name}</h4>
                <h3>{data.role}</h3>
            </div>
        </div>
        </>
    )
}


export default ExperienceCard;
