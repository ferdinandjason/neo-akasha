export interface ICharacter {
    key: CharacterID
    name: string
    rank: number
    icon: string
    level: number
    constellation: number
    talent: {
        auto: number
        skill: number
        burst: number
    }
}