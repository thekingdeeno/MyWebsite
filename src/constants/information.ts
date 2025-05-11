export const workExperience = [
    {
        id: 1,
        name: "Code Your Future - Birmingham",
        logoImageUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHtdsIatNl3Lg/company-logo_200_200/company-logo_200_200/0/1630578374027/codeyourfuture_logo?e=1750291200&v=beta&t=ek17zQFYncRgRV2lkFzNSxGaXLwmCYRGEVB8wJthOlo",
        imageFileName: "codeyourfuture_cover.jpeg",
        role: "Software Dev Volunteer / Training Assistant",
        description: "As a volunteer Coding Instructor, I support underrepresented individuals entering the tech industry through mentorship, code reviews, and peer programming sessions. I assist learners with coding challenges, career development advice, portfolio building, and job interview preparation, helping to foster a more diverse and inclusive tech community.",
        points: [
            'Conduct code reviews and lead peer programming sessions for junior developers.',
            'Mentor learners from underrepresented backgrounds, providing guidance on coding challenges, portfolio building, and job interview preparation.',
            'Support career development initiatives, promoting diversity and inclusion within the tech community.'],
        projects: [
            
        ]
    },
    {
        id: 2,
        name: "Piggyvest Global Limited",
        logoImageUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGxM9phphZxfg/company-logo_200_200/company-logo_200_200/0/1630482013181/piggyvest_logo?e=1750291200&v=beta&t=CG1Su52hgDB6hDv3vYElaSinP9WY7r12Zpo3_eGkpo8",
        imageFileName: "pv_banner.jpeg",
        role: "Full-Stack Software Engineer",
        description: "As a Fullstack Software Engineer at PiggyTech, I worked on the development of microservices in TypeScript, optimising systems for high-volume API calls and improving error tracking processes by 25%. I built responsive web dashboards for transaction management and customer savings plans using React.js, Next.js, and Sass, contributing to a 15% boost in customer support efficiency. Collaborating closely with senior engineers, data scientists, and product designers, I enhanced system performance, refined UI/UX flows, and contributed to architectural planning through documentation and ERDs.",
        points: [
            'Developed TypeScript microservices for operational automation and high-volume API handling, improving error tracking efficiency by 25%',
            'Built dynamic React.js and Next.js dashboards for transaction management and customer savings plans, increasing customer support efficiency by 15%.',
            'Collaborated with senior software engineers, data scientists, and product designers to enhance system architecture and UI/UX flow',
            'Contributed to backend integration with legacy systems and created documentation including ERDs and system integrations',
        ],
        projects: [

        ]
    },
    {
        id: 3,
        name: "Live Capital",
        logoImageUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQHBTjxOnpFahg/company-logo_200_200/B4DZUUP8.LHIAI-/0/1739801481559/live_capital_hq_logo?e=1750291200&v=beta&t=MeNzrw-Y0_Ee9W5VCeupOgGinm_k-u9R470LhxxbS9I",
        imageFileName: "LCBanner.jpeg",
        role: "Backend Engineer",
        description: "At Live Capital, I develop and maintain scalable backend services for mobile applications, translating product designs and technical requirement documents into efficient backend systems. I integrate third-party payment APIs to enable secure financial transactions within the app, while contributing to system architecture and cloud deployments using Node.js, MySQL, Restana, and Google Cloud Platform. Additionally, I collaborate with cross-functional teams and help onboard new engineers to enhance development speed and team productivity.",
        points: [
        'Develop and maintain scalable backend services for mobile applications using Node.js, MySQL, Restana, and Google Cloud Platform (GCP)',
        'Integrate third-party payment APIs to enable secure in-app financial transactions',
        'Translate Figma designs, PRDs, and technical documents into efficient, production-ready backend systems',
        'Support team growth by onboarding new engineers and collaborating in cross-functional agile teams.'],
        projects: [

        ]
    },
    {
        id: 4,
        name: "Ebidhaa Software Solutions",
        logoImageUrl: "https://pbs.twimg.com/profile_images/1345682553286635521/XUvgS80__400x400.jpg",
        imageFileName: "Ebidhaa_logo.jpg",
        width: 400,
        height: 50,
        role: "Backend Engineering Intern",
        description: "As a Backend Engineer Intern at Ebidhaa, I supported a senior engineer in building and maintaining APIs for CRUD operations using Node.js and Fastify. I participated in cross-functional development processes, contributed to UI/UX testing, identified and resolved bugs on both iOS and Android platforms, and provided constructive feedback for improving app performance and user experience based on client requirements.",
        points: [
            'Maintained and extended backend APIs for CRUD operations using Node.js and Fastify under the guidance of a senior engineer',
            'Participated in UI/UX testing, identified and resolved mobile app bugs on iOS and Android devices',
            'Delivered app performance improvements and UX recommendations based on client requirements in a cross-functional team',
        ],
        projects: [
            
        ]
    }
]

export const personalProjects = [
    {
        id: 1,
        name: "Wando Communications - v1",
        description: "Wando was my first major personal project. It was a social media web application I made for me, my family and my close friends to share posts, chat with each other and just have fun. Users could follow others, like and comment on posts etc, pretty much what you can do on other apps. I currently work on a version 2 of the Wando web app when i have free time. Unlike this one which was a monolith, (everything is built into one codebase and I used EJS and Websockets to render data on the HTML ...lol its wierd I know, I didn't know React.JS as of then then. Wando version 2 will have its own dedicated backend server and will have a mobile app. I will make a new website for it but this time with NextJS, or if I have time to learn VueJS then I'll use that.",
        tools: ['HTML','CSS','EJS','NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Passport.JS', 'Git'],
        imageFileName: "Wando.png",
        repoUrl: "https://github.com/thekingdeeno/Wando",
        link:""
    },
    {
        id: 2,
        name: "Deeno Cryptodata",
        description: "I made a web app that allows people to view all details of all the crypto currencies on the market. You can search crypto bases on fullname or by their accronyms. There's also a feature to allow users to compare prices, convert from one coin to another and convert the value of their coins to their local currency as well. All this was made possible using coincap api v2. They have since updated their services and I'll have to update my implementations before taking it live again.",
        tools: ['HTML','CSS','EJS','NodeJS', 'Express', 'Concap API',],
        imageFileName:"DeenoCryptodata.png",
        repoUrl: "https://github.com/thekingdeeno/Deeno-CryptoData",
        link:'suspended'
    },
    {
        id: 3,
        name: "Weather.io",
        description: "Weather.io was a really basic project but was really fun to make as of when I worked on it. It's probably one of my cleanest UI's then. Its a web app where you can check the current weather data of any location. There's a search bar where you can input the city or country you want to get the data of. It shows you wind speeds, wind gust and most importantly the temperature. It also returns a text describing the weather there. The most interesting thing about this app is that the background changes depending on the weather returned.",
        tools: ['HTML','CSS','EJS','NodeJS', 'Express', 'API',],
        imageFileName:"WeatherIO.png",
        repoUrl: "https://github.com/thekingdeeno/Weather.io",
        link:""
    },
    {
        id: 4,
        name: "Taxi Booking System - (in Java)",
        description: "For my second semester in uni we were asked to create a Taxi Service for a company (in JAVA). I watched a lot of tutorials and thanks to my knowledge of typescript and all i had learnt from working under senoir engineers in the past I was able to understand it quick and come up with something.",
        tools: ['Java', 'Git'],
        imageFileName: "TaxiBookingService.png",
        repoUrl: "https://github.com/thekingdeeno/Java-Taxi-Service",
        link:null
    },
    {
        id: 5,
        name: "Wando - v2 (Backend)",
        description: "This project is the backend server for the version 2 of Wando. Its being developed usinf Fastify, Since working on Wando, all projects I have built both personal and at work have been built with SQL (mysql and postgres). I decided to go continue to using MongoDB for the project. It might be slower but I like trying different things lol. In this version I will add new features and AI implementations. The first one was just a basic personal project but Wando v2 is something bigger. I'm not going to shed to much light on my ideas for version 2 but hopefully its a success when realeased. (The repo will remain public during its initial stages but will be changed to private when working on the main implementations)",
        tools: ['NodeJS', 'Typescript', 'GCP', 'Fastify', 'MongoDB', 'Redis', 'Firebase', 'etc'],
        imageFileName: "Wando.png",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-backend",
        link: null
    },
    {
        id: 6,
        name: "Wando - v2 (Mobile App)",
        description: "This is the mobile app for wando, still in the works as well. It will retain some of the designs and UI/UX of the initial version with more mordern modifications. This will be my first major mobile project when complted",
        tools: ['React Native', 'Expo', 'Typescropt'],
        imageFileName: "WandoMobileApp.png",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-mobile",
        link:null

    },
    {
        id: 7,
        name: "Wando - v2 (Web App in NextJS)",
        description: "Wando v2 - This would be the web version of Wando v2 Built using VueJS. I haven't started working on this but I just felt like adding it to the list. I will use this project as an opportunity to learn master another web framework",
        tools: ['VueJS'],
        imageFileName: "WandoApp.png",
        repoUrl: "",
        link:null

    },
    {
        id: 8,
        name: "Finance Allocation Dashboard",
        description: "The purpose of this project was to get more practical understanding of state management in react using the useContext, useReducer and all that. Its just an allocation page to allocate funds to departments of a company while keeping track of budget, balance and expenses",
        tools: ['ReactJS'],
        imageFileName: "BudgetAllocation.png",
        repoUrl: "https://github.com/thekingdeeno/Company-Budget-Allocation-Dashboard",
        link:""
    },
    {
        id: 9,
        name: "React Native Game App",
        description: "This is a react native project i use to learn and practice writing react native code. It a guessing game app.",
        tools: ['React Native'],
        imageFileName: "GuessingApp.png",
        repoUrl: "https://github.com/thekingdeeno/Mobile-App-Game",
        link:null

    },
    {
        id: 10,
        name: "Mini Online Drum Kit",
        description: "This was one of my first ever projects when learning html, css and javascript ...good times. Its a html webapp to make sounds with drums. Was cool actually.",
        tools: ['HTML', 'CSS', 'Javascript'],
        imageFileName: "DeenoDrummer.png",
        repoUrl: "https://github.com/thekingdeeno/Drum-set-WebApp",
        link: "https://thekingdeeno.github.io/Drum-set-WebApp/",
    },
]