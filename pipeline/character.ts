import { AmbrAvatarResponse } from "./response"
import fs = require("fs");
import dumpFile from "./util";
import boilerplate from "./boilerplate";

function preprocessTag(input: string) {
  return input
  .replaceAll(/(<color=#FFD780FF>)(.+?)(<\/color>)/ig, "<strong>$2</strong>")
  .replaceAll(/(<color=#80FFD7FF>)(.+?)(<\/color>)/ig, "<anemo>$2</anemo>")
  .replaceAll(/(<color=#FFACFFFF>)(.+?)(<\/color>)/ig, "<electro>$2</electro>")
  .replaceAll(/(<color=#80C0FFFF>)(.+?)(<\/color>)/ig, "<hydro>$2</hydro>")
  .replaceAll(/(<color=#99FFFFFF>)(.+?)(<\/color>)/ig, "<cryo>$2</cryo>")
  .replaceAll(/(<color=#FF9999FF>)(.+?)(<\/color>)/ig, "<pyro>$2</pyro>")
  .replaceAll(/(<color=#FFE699FF>)(.+?)(<\/color>)/ig, "<geo>$2</geo>")
  .replaceAll(/(<color=#99FF88FF>)(.+?)(<\/color>)/ig, "<dendro>$2</dendro>")
  .replaceAll("\\n", "<br/>\\n")
}

function parseDescription(description: string) {
  const sanitizedTags = preprocessTag(description).split('\\n')

  const result = [];
  for (let i = 0; i < sanitizedTags.length; i++) {

    // parse bullet points
    if (sanitizedTags[i].startsWith("·")) {
      if (i > 0 && sanitizedTags[i-1].startsWith("·")) {
        result[result.length - 1].push(sanitizedTags[i].substring(1))
      } else {
        result.push([sanitizedTags[i].substring(1)])
      }
    } else {
      result.push(sanitizedTags[i])
    }
  }
  return result
}

function parseTalentPromoteDescription(description: string[]): string[] {
  const result = [];
  for (let i = 0; i < description.length; i++) {
    // en locale
    if (description[i].startsWith("Low/High Plunge DMG")) {
      result.push("Low Plunge DMG")
      result.push("High Plunge DMG")
    } else {
      result.push(description[i].split("|")[0])
    }
  }
  return result
}

type LocalizationData = {
  talent: object
  constellation: object
}

export function characterLocalizationDump(lang: string, response: AmbrAvatarResponse) {
  const characterData = response.data

  const talentData = {}
  for (const id in characterData.talent) {
    const talentField = {}
    let talentParam = {}

    // if this is auto
    if (id == "0") {
      characterData.talent[id].description.split('\\n\\n').map((item: string, index: number) => {
        talentField[index] = {}
        Object.assign(talentField[index], parseDescription(item))
      })
    } else {
      Object.assign(talentField, parseDescription(characterData.talent[id].description))
    }

    if (characterData.talent[id].promote != undefined && Object.keys(characterData.talent[id].promote).length > 1) {
      talentParam = parseTalentPromoteDescription(characterData.talent[id].promote[1].description)
    }

    let talentName = characterData.talent[id].name
    if (talentName.startsWith("Normal Attack: ")) {
      talentName = characterData.talent[id].name.replace("Normal Attack: ", "")
    }

    talentData[id] = {
      name: talentName,
      field: talentField,
      param: talentParam
    }
  }

  const constellationData = {}
  for (const id in characterData.constellation) {
    constellationData[id] = {}
    Object.assign(constellationData[id], parseDescription(characterData.constellation[id].description))
  }

  const result: LocalizationData = {
    talent: talentData,
    constellation: constellationData
  }

  const dir = `../public/locales/${lang}`
  const filename = `/${characterData.id}.json`

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})
  dumpFile(dir + filename, result)
}

type TalentParamData = {
  [ID: string]: number[][]
}

export function characterDump(response: AmbrAvatarResponse) {
  const characterData = response.data
  const passiveIDs = []

  const result: TalentParamData = {}
  for (const id in characterData.talent) {
    if (characterData.talent[id].promote != undefined && Object.keys(characterData.talent[id].promote).length > 1) {
      result[id] = []
      for (const level in characterData.talent[id].promote) {
        characterData.talent[id].promote[level].params.forEach((param, index) => {
          if (level == "1") {
            result[id].push([param])
          } else {
            result[id][index].push(param)
          }
        })
      }
    }
    if (characterData.talent[id].type == 2) {
      passiveIDs.push(id)
    }
  }

  const dir = `../src/Data/Character/${characterData.id}`;
  const filename = `/data.json`
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})
  dumpFile(dir + filename, characterData)

  const filename2 = `/param.json`
  dumpFile(dir + filename2, result)

  if (characterData.id == "10000002" || characterData.id == "10000003") {
    return
  }

  boilerplate(dir + `/index.ts`, characterData.id, passiveIDs)

  console.log(`import ${characterData.name} from "./${characterData.id}"`)

  // console.log(`${characterData.id}: ${characterData.name},`)
}
