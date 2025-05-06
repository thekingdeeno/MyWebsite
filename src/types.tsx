export type WorkExperienceType = {
        id: number,
        name: string,
        logoImageUrl: string,
        imageFileName: string,
        role: string,
        description: string,
        // projects: []
    }

    export type PersonalProjectType = {
        id: number,
        name: string,
        description: string,
        tools: string[],
        imageFileName: string,
        repoUrl: string,
        link: string | null
    }