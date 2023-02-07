import Character, { characterTemplate, ICharacterData } from "../Character";
import data from "./data.json";
import param from "./param.json";

const ct = characterTemplate(10000029, data);
const talent = [
  ct.passive("passive1", 4),
  ct.passive("passive2", 5),
  ct.passive("passive3", 6),
];

const char: ICharacterData = {
  ...data,
  namecardIcon: data.other.nameCard.icon,
  talent,
};

export default new Character(char);
  