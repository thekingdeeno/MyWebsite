export const workExperience = [
    {
        id: 1,
        name: "Code Your Future - Birmingham",
        logoImageUrl: "codeyourfuture_icon.jpeg",
        imageFileName: "codeyourfuture_cover.jpeg",
        role: "Software Dev Volunteer / Training Assistant",
        description: "As a volunteer Coding Instructor, I support diverse individuals entering the tech industry through mentorship, code reviews, and peer programming sessions. I assist learners with coding challenges, career development advice, portfolio building, and job interview preparation, helping to foster a more diverse and inclusive tech community.",
        points: [
            'Conduct code reviews and lead peer programming sessions for junior developers.',
            'Mentor learners, providing guidance on coding challenges, portfolio building, and job interview preparation.',
            'Support career development initiatives, promoting diversity and inclusion within the tech community.'],
        projects: [
            
        ]
    },
    {
        id: 2,
        name: "Piggyvest Global Limited",
        logoImageUrl: "piggyvest_icon.jpeg",
        imageFileName: "pv_banner.jpeg",
        role: "Full-Stack Software Engineer",
        description: "As a Fullstack Software Engineer at PiggyTech, I worked on the development of microservices in TypeScript, optimising systems for high-volume API calls and improving error tracking processes. I built responsive web dashboards for transaction management and customer savings plans using React.js, Next.js, and Sass, contributing to a boost in customer support efficiency. Collaborating closely with senior engineers, data scientists, and product designers, I enhanced system performance, refined UI/UX flows, and contributed to architectural planning through documentation and ERDs.",
        points: [
            'Developed TypeScript microservices for operational automation and high-volume API handling, improving error tracking efficiency',
            'Built dynamic React.js and Next.js dashboards for transaction management and customer savings plans, increasing customer support efficiency',
            'Added and integrated new pages and features to the Piggyvest Mobile app using React Native ',
            'Collaborated with senior software engineers, data scientists, and product designers to enhance system architecture and UI/UX flow',
            'Contributed to backend integration with legacy systems and created documentation including ERDs and system integrations',
            'Built a new feature to allow users manage recurring savings more efficiently and automaitcally handle payouts and creation of new savings plans',
        ],
        projects: [

        ]
    },
    {
        id: 3,
        name: "Live Capital",
        logoImageUrl: "livecapital_icon.jpeg",
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
        logoImageUrl: "ebidhaa_icon.jpg",
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
        name: "Wando - v1",
        description: "Wando was my first major personal project. It was a social media web application I made for me, my family and my close friends to share posts, chat with each other and just have fun. Users could follow others, like and comment on posts etc, pretty much what you can do on other apps. I currently work on a version 2 of the Wando web app when i have free time. Unlike this one which was a monolith, (everything is built into one codebase and I used EJS and Websockets to render data on the HTML ...lol its wierd I know, I didn't know React.JS as of then then. Wando version 2 will have its own dedicated backend server and will have a mobile app. I will make a new website for it but this time with NextJS, or if I have time to learn VueJS then I'll use that.",
        tools: ['EJS','NodeJS', 'Express', 'MongoDB','Socket.io', 'OAuth2.0'],
        imageFileName: "Wando.png",
        repoUrl: "https://github.com/thekingdeeno/Wando",
        link:"https://wando.onrender.com"
    },
    {
        id: 2,
        name: "Deeno Cryptodata",
        description: "I made a web app that allows people to view all details of all the crypto currencies on the market. You can search crypto bases on fullname or by their accronyms. There's also a feature to allow users to compare prices, convert from one coin to another and convert the value of their coins to their local currency as well. All this was made possible using coincap api v2. They have since updated their services and I'll have to update my implementations before taking it live again.",
        tools: ['HTML','CSS','EJS','NodeJS', 'Express', 'Concap',],
        imageFileName:"DeenoCryptodata.png",
        repoUrl: "https://github.com/thekingdeeno/Deeno-CryptoData",
        link:'https://cryptodata-vzd7.onrender.com'
    },
    {
        id: 3,
        name: "Weather.io",
        description: "Weather.io was a really basic project but was really fun to make as of when I worked on it. It's probably one of my cleanest UI's then. Its a web app where you can check the current weather data of any location. There's a search bar where you can input the city or country you want to get the data of. It shows you wind speeds, wind gust and most importantly the temperature. It also returns a text describing the weather there. The most interesting thing about this app is that the background changes depending on the weather returned.",
        tools: ['HTML','CSS','EJS','NodeJS', 'Express', 'API',],
        imageFileName:"WeatherIO.png",
        repoUrl: "https://github.com/thekingdeeno/Weather.io",
        link:"https://weather-io-ac90.onrender.com/"
    },
    {
        id: 4,
        name: "Wando - v2 (Backend)",
        description: "This project is the backend server for the version 2 of Wando. Its being developed usinf Fastify, Since working on Wando, all projects I have built both personal and at work have been built with SQL (mysql and postgres). I decided to go continue to using MongoDB for the project. It might be slower but I like trying different things lol. In this version I will add new features and AI implementations. The first one was just a basic personal project but Wando v2 is something bigger. I'm not going to shed to much light on my ideas for version 2 but hopefully its a success when realeased. (The repo will remain public during its initial stages but will be changed to private when working on the main implementations)",
        tools: ['NodeJS', 'Typescript', 'GCP', 'Fastify', 'MongoDB', 'Redis', 'Firebase', 'etc'],
        imageFileName: "Wando.png",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-backend",
        link: null
    },
    {
        id: 5,
        name: "Wando - v2 (Mobile App)",
        description: "This is the mobile app for wando, still in the works as well. It will retain some of the designs and UI/UX of the initial version with more mordern modifications. This will be my first major mobile project when complted",
        tools: ['React Native', 'Expo', 'Typescript'],
        imageFileName: "WandoMobileApp.png",
        repoUrl: "https://github.com/thekingdeeno/wando-v2-mobile",
        link:null

    },
    {
        id: 6,
        name: "Finance Allocation Dashboard",
        description: "The purpose of this project was to get more practical understanding of state management in react using the useContext, useReducer and all that. Its just an allocation page to allocate funds to departments of a company while keeping track of budget, balance and expenses",
        tools: ['ReactJS'],
        imageFileName: "BudgetAllocation.png",
        repoUrl: "https://github.com/thekingdeeno/Company-Budget-Allocation-Dashboard",
        link:"https://company-budget-allocation-dashboard.vercel.app/"
    },
    {
        id: 7,
        name: "React Native Game App",
        description: "This is a react native project i use to learn and practice writing react native code. It a guessing game app.",
        tools: ['React Native'],
        imageFileName: "GuessingApp.png",
        repoUrl: "https://github.com/thekingdeeno/Mobile-App-Game",
        link:null

    },
]

export const universityProjects = [
    {
        id: 1,
        name: "Taxi Booking System",
        course: "TEE 106 - Introduction to Programming",
        description: "For my second semester in uni we were asked to create a Taxi Service for a company (in JAVA). I watched a lot of tutorials and thanks to my knowledge of typescript and all i had learnt from working under senoir engineers in the past I was able to understand it quick and come up with something.",
        tools: ['Java'],
        imageFileName: "TEE106.png",
        repoUrl: "https://github.com/thekingdeeno/Java-Taxi-Service",
        link:null,
        bgColor: '#EAECED'
    },
    {
        id: 2,
        name: "Deep Space Exploration Website",
        course: "CMP 4310 - Web Design and Development",
        description: "For this project, all students in the entire module were randomlyb assigned a topic and we had a few weeks to research and build a website using only HTML, CSS. Javascript was optional but there was no way i was going to build a website without it lol. I was assigned the topic 'Deep Space Exploration'. I had a lot of fun building it really improved my figma design skills.",
        tools: ['HTML', 'CSS', 'Javascript', 'Figma'],
        imageFileName: "CMP4310.png",
        repoUrl: "https://github.com/thekingdeeno/COMP4310-First-Semester-Project",
        link:'https://thekingdeeno.github.io/COMP4310-First-Semester-Project/pages/',
        bgColor: '#1D1D1D'
    },
    {
        id: 3,
        name: "Hospital Management System",
        course: "CMP 4266 - Computer Programming",
        description: "This was a project I did in my first year of university. It was a hospital management system built using Python and tKinter. It was a simple system that allowed me to manage patients, doctors and appointments. I used the tKinter library to create the GUI for the system.",
        tools: ['Python', 'tKinter', 'Spyder'],
        imageFileName: "CMP4266.png",
        repoUrl: "https://github.com/thekingdeeno/COMP4266-HMS-Project",
        link: null,   
        bgColor: '#1B2340'
    },
    {
        id: 4,
        name: "Smart Refrigerator with Arduino Uno R3 Microcontroller",
        course: "CMP 4267 - Computer Systems",
        description: "For this project all students were once again randomly assigned a topic and we had to research and build a project using the Arduino board. I was assigned the topic 'Smart Refrigerator'. This was my favouroite project of this semester because I had to learn a new language C++ and  also learn aboudt the Arduino board and how to use it to build a project.",
        tools: ['C++', 'Arduino', 'Tinkercad'],
        imageFileName: "CMP4267.png",
        repoUrl: "https://github.com/thekingdeeno/COMP4267-Smart-Refrigerator-Board",
        link: "https://www.tinkercad.com/things/dgxCmyJFb4d-smart-refrigerator?sharecode=WzcOAi83uTXKAg7MvVy_VBgA6xjFDrYi9o8PFApNdeQ",
        bgColor: '#10203B'
    },
    {
        id: 5,
        name: "Akua Water System - (Java Server)",
        course: "CMP 4285 - Innovation Project",
        description: "This is my 2026 Innovation Project. In this module, students were grouped into teams of four and we were told to come up with an idea that could potentially solve a problem. We decided to go for a water filter and monitoring system that coulf be used in rural areas and also in aqauriums. I was responsible for all the software aspects of the project including the backend server, the mobile app and the code on the ESP32 Motherboard. I've always written backend code in Javascript but I felt this was an opportunity to put my Java skills to the test.",
        tools: ['Java', 'Spring Boot', 'PostgreSQL'],
        imageFileName: "CMP4285(2).png",
        repoUrl: "https://github.com/thekingdeeno/CMP4285-Akua-Java-Server",
        link: null,
        bgColor: '#1440D4'
    },
    {
        id: 6,
        name: "Akua Water System - (Mobile App)",
        course: "CMP 4285 - Innovation Project",
        description: "This is the mobile app for the Akua Water System. It's a React Native app that allows users to monitor the water filter and monitoring system. It also allows users to control the hardware and perform actions depending on their hardware version. actions may include feeding fishes in aquariums remotely or adding supplements to drinking water etc",
        tools: ['Typescript', 'React Native', 'Expo', 'Xcode', 'Android Studio'],
        imageFileName: "CMP4285.png",
        repoUrl: "https://github.com/thekingdeeno/CMP4285-Akua-Mobile-App",
        link: null,
        bgColor: '#F3F3DC'
    },
]