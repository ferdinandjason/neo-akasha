import {
  faAnemo,
  faAtk,
  faCritDmg,
  faCritRate,
  faCryo,
  faDef,
  faDendro,
  faElectro,
  faElementalMastery,
  faEnergyRecharge,
  faGeo,
  faHealingBonus,
  faHp,
  faHydro,
  faPhysicalDmgBonus,
  faPyro,
} from "../Components/FontAwesome";

export interface Input {
  data: number;
  unit: string;
}

export const CharacterStatGroup = new Map<string, Array<string>>([
  ["Basic Stat", ["hp", "atk", "def", "em", "er", "crate", "cdmg"]],
  ["Basic Buff", ["pyroDMGBonus", "hydroDMGBonus", "cryoDMGBonus", "electroDMGBonus", "geoDMGBonus", "anemoDMGBonus", "dendroDMGBonus", "physicalDMGBonus", "healingBonus"]],
  ["Enemy Resist", ["enemyLevel", "enemyPhysicalResist", "enemyPyroResist", "enemyHydroResist", "enemyCryoResist", "enemyElectroResist", "enemyGeoResist", "enemyAnemoResist", "enemyDendroResist"]],
]);

export const CharacterInputToFaIcon = new Map<string, object>([
  ["hp", faHp],
  ["atk", faAtk],
  ["def", faDef],
  ["em", faElementalMastery],
  ["er", faEnergyRecharge],
  ["crate", faCritRate],
  ["cdmg", faCritDmg],
  ["pyroDMGBonus", faPyro],
  ["hydroDMGBonus", faHydro],
  ["cryoDMGBonus", faCryo],
  ["electroDMGBonus", faElectro],
  ["geoDMGBonus", faGeo],
  ["anemoDMGBonus", faAnemo],
  ["dendroDMGBonus", faDendro],
  ["physicalDMGBonus", faPhysicalDmgBonus],
  ["healingBonus", faHealingBonus],
  ["enemyPhysicalResist", faPhysicalDmgBonus],
  ["enemyPyroResist", faPyro],
  ["enemyHydroResist", faHydro],
  ["enemyCryoResist", faCryo],
  ["enemyElectroResist", faElectro],
  ["enemyGeoResist", faGeo],
  ["enemyAnemoResist", faAnemo],
  ["enemyDendroResist", faDendro],
]);

export default {};
