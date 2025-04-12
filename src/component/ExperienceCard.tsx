import "./ExperienceCard.scss";
import { useState } from "react";
import experiences from "../work-experience";
import Image from "next/image"
import PiggyvestLogo from "../../public/images/piggyvest_logo.png";
import EbidhaaLogo from "../../public/images/Ebidhaa_logo.jpg";
import CodeYourFutureLogo from "../../public/images/cyf_Logo.png"

function companyLogoImage (id: number) {
    switch (id) {
      case 1:
        return(
          <Image src={PiggyvestLogo} alt="" width={200} height={50} />
        )
        case 2:
        return(
            <Image src={EbidhaaLogo} alt="" width={50} height={50} />
        )
        case 3:
        return(
            <Image src={CodeYourFutureLogo} alt="" width={200} height={50} />
        )

      default:
        break;
    }
  }

type Props = {
    data: any
}

const ExperienceCard = ({data}: Props)=>{

    const [activeModalId, setActiveModalId] = useState<any>(null);
    
    return(
        <>
        {activeModalId && 
            (
            <div className="work-details-modal">
                <div className="logo-container">
                    {companyLogoImage(data.id)}
                </div>

                <h3>{experiences[activeModalId - 1].name}</h3>
                <h3>{experiences[activeModalId - 1 ].role}</h3>
            </div>
            )
        }
        <div className="experience-card" onClick={()=> setActiveModalId(data.id)}>
            <div className="logo-container">
                <div>
                {companyLogoImage(data.id)}
                </div>
            </div>
            <div className="text-container">
                <h3>{data.name}</h3>
            </div>
        </div>
        </>
    )
}

export default ExperienceCard;
