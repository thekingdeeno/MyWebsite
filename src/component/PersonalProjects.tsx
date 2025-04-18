import { FaCode } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import BannerImage from '../../public/images/EbidhaaBannerImage.png'


const PersonalProjects = ({project}: any)=>{

    let projectsElementsArray = [];

    for (let i = 0; i < personalProjects.length; i++) {
        const proj = personalProjects[i];
        
        projectsElementsArray.push(
            <div className="project" key={proj.id}>
                <div className="project-image">
                    {/* {proj.image} */}
                </div>
                <div className="description">
                    <p>{proj.description}</p>
                </div>
                <div className="buttons">
                    <button>Code <FaCode /></button>
                    {proj.link ?
                    <button>Link <HiExternalLink /></button>:
                    <button>Deployment Suspended <MdSignalWifiConnectedNoInternet0 /></button>
                    }
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="personal-projects">
                {projectsElementsArray}
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
        repoUrl: "https://github.com/thekingdeeno/Wando",
        link:""
    },
    // {
    //     id: 2,
    //     name: "Deeno Cryptodata",
    //     description: "During my time working under a Senior Engineer, they contributed to backend development by creating and maintaining APIs for CRUD operations using Node.js and Fastify.",
    //     image:<Image src={"../../public/images/EbidhaaBannerImage.png"} width={50} height={50} alt="img" />,
    //     repoUrl: "https://github.com/thekingdeeno/Deeno-CryptoData",
    //     link:null
    // },
    // {
    //     id: 3,
    //     name: "Weather.io",
    //     description: "During my time working under a Senior Engineer, they contributed to backend development by creating and maintaining APIs for CRUD operations using Node.js and Fastify.",
    //     image:<Image src={"../../public/images/EbidhaaBannerImage.png"} width={50} height={50} alt="img" />,
    //     repoUrl: "https://github.com/thekingdeeno/Weather.io",
    //     link:""
    // },
    // {
    //     id: 4,
    //     name: "Taxi Booking System - (in Java)",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/Java-Taxi-Service",
    // },
    // {
    //     id: 5,
    //     name: "Wando - v2 (Mobile App)",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/wando-v2-mobile",
    // },
    // {
    //     id: 6,
    //     name: "Wando - v2 (Backend)",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/wando-v2-backend",
    // },
    // {
    //     id: 7,
    //     name: "Wando - v2 (Web App in NextJS)",
    //     description: "",
    //     image: "",
    //     repoUrl: "",
    // },
    // {
    //     id: 8,
    //     name: "Finance Allocation Dashboard",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/Company-Budget-Allocation-Dashboard",
    // },
    // {
    //     id: 9,
    //     name: "React Native Game App",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/Mobile-App-Game",
    // },
    // {
    //     id: 10,
    //     name: "Mini Online Drum Kit",
    //     description: "",
    //     image: "",
    //     repoUrl: "https://github.com/thekingdeeno/Drum-set-WebApp",
    //     link: "https://thekingdeeno.github.io/Drum-set-WebApp/"
    // },
]