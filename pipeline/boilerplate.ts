import fs = require("fs");

export default function boilerplate(fileName: string, id: string, ids: string[]) {
  fs.writeFile(fileName, `import Character, { characterTemplate, ICharacterData } from "../Character";
import data from "./data.json";
import param from "./param.json";

const ct = characterTemplate(${id}, data);
const talent = [
  ct.passive("passive1", ${ids[0]}),
  ct.passive("passive2", ${ids[1]}),
  ct.passive("passive3", ${ids[2]}),
];

const char: ICharacterData = {
  ...data,
  namecardIcon: data.other.nameCard.icon,
  talent,
};

export default new Character(char);
  `, () => {console.log("Generated Boilerplat Index JS at: ", fileName);});
}
