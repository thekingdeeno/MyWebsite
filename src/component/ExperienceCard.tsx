import "./ExperienceCard.scss";
import { useState } from "react";
import experiences from "../work-experience";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
    data: any
}

const ExperienceCard = ({data}: Props)=>{

    const [activeModalId, setActiveModalId] = useState<any>(null);
    function closeModal(e: any){
        if (e.target.className === 'experience-detail-overlay') {
            setActiveModalId(null)
        }
        return
    }
    
    return(
        <>
        {activeModalId && 
            (
            <div className="experience-detail-overlay" onClick={(e)=>closeModal(e)}>
                <div className="experience-detail-body">
                    {/* <button className="close-button">
                        <IoCloseSharp className="icon" />
                    </button> */}
                    <div className="data-container">
                        <div className="container-heading">
                            <img src={data.logoImageUrl} alt="logo-img" />
                        </div>
                        <h2>{data.name}</h2>
                        <p>{experiences[activeModalId - 1].description}</p>
                    </div>
                </div>
            </div>
            )
        }
        <div className="experience-card" onClick={()=> setActiveModalId(data.id)}>
            <div className="logo-container">
                <div className="banner-image" >
                    <img src={data.bannerImageUrl} alt="banner image" />
                </div>
                <div className="logo-image">
                    <img src={data.logoImageUrl} alt="logo image" />
                </div>
            </div>
            <div className="text-container">
                <h4>{data.name}</h4>
                <h3>{data.role}</h3>
                {/* <p>{data.description}</p> */}
            </div>
        </div>
        </>
    )
}

export default ExperienceCard;
