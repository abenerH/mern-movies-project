export type movieEntries = {
    id: string,
    title: string,
    releaseDate: string,
    directedBy: {
        id: string,
        name: string
    },
    score: number,
    cast: {
        id: string,
        name: string,
    }[]
}