import Translate from "../../Components/Translate";
import { CharacterID } from "../../Types/const";

const characters = import('.').then(imp => imp.default)

export interface CharacterTalentSectionText {
  text: JSX.Element
}

export interface CharacterTalentMultiScale {
  value: number[]
  base?: string
  unit?: string
}

export interface CharacterTalentSectionField {
  key: JSX.Element
  value: number[]
  unit?: string
  multi?: number
  multiScale?: CharacterTalentMultiScale[]
}

export interface CharacterTalentSectionFields {
  field: CharacterTalentSectionField[]
}

export type CharacterTalentSection = CharacterTalentSectionText | CharacterTalentSectionFields

export interface CharacterTalentData {
  icon: string
  promoteable: boolean
}

export interface CharacterTalent {
  type: string
  name: string
  data: CharacterTalentData
  sections: CharacterTalentSection[]
}

export interface ICharacterData {
    id: CharacterID
    name: string
    rank: number
    icon: string
    namecardIcon: string
    talent: CharacterTalent[]
}

export default class CharacterData {
    characterData: ICharacterData

    constructor(character: ICharacterData) {
        this.characterData = character;
    }

    static get = (id: CharacterID): Promise<CharacterData> | undefined => id ? characters.then(c => c[id]) : undefined;
    static all = (): Promise<CharacterData[]> => characters.then(c => Object.keys(c).map(Number).map(id => c[id]))

    get id() { return this.characterData.id}
    get name() { return this.characterData.name}
    get rank() { return this.characterData.rank}
    get icon() { return this.characterData.icon}
    get namecardIcon() { return this.characterData.namecardIcon}
    get talents() {return this.characterData.talent}
}

export function talentTemplate(type: string, name: string, data: {icon: string, promote?: object}, sections: CharacterTalentSection[]): CharacterTalent {
  return {
    type,
    name,
    data: {
      icon: data.icon,
      promoteable: data.promote != undefined && Object.keys(data.promote).length > 1
    },
    sections,
  }
}

export interface ICharacterTemplate {
  tr: (i18nKey: string) => JSX.Element
  auto: (talentID: number, sections: CharacterTalentSection[]) => CharacterTalent
  talent: (type: string, talentID: number, sections: CharacterTalentSection[]) => CharacterTalent
  passive: (type: string, talentID: number) => CharacterTalent
}

interface ICharacterDataTalentObject {
  icon: string
  promote?: object
}

export interface ICharacterDataObject {
  talent: Record<string, ICharacterDataTalentObject>
}

export const characterTemplate = (id: CharacterID, data: ICharacterDataObject): ICharacterTemplate => {
  return {
    tr: (i18nKey: string) => <Translate ns={String(id)} key18={i18nKey}/>,
    auto: (talentID: number, sections: CharacterTalentSection[]) => templateForTalent(data, talentID, "auto", sections),
    talent: (type: string, talentID: number, sections: CharacterTalentSection[]) => templateForTalent(data, talentID, type, [{
      text: <Translate ns={String(id)} key18={`talent.${talentID}.field`}/>
    }, ...sections]),
    passive: (type: string, talentID: number) => templateForTalent(data, talentID, type, [{
      text: <Translate ns={String(id)} key18={`talent.${talentID}.field`}/>
    }]),
  }
}

function templateForTalent(data: ICharacterDataObject, talentID: number, type: string, sections: CharacterTalentSection[]): CharacterTalent {
  console.log(data.talent[String(talentID)].icon)
  return {
    type,
    name: `talent.${talentID}.name`,
    data: {
      icon: data.talent[String(talentID)].icon,
      promoteable: data.talent[String(talentID)].promote != undefined && Object.keys(data.talent[String(talentID)].promote!).length > 1
    },
    sections,
  }
}
