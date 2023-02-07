import Character, { characterTemplate, ICharacterData } from "../Character";
import data from "./data.json";
import param from "./param.json";

const dm = {
  normal: {
    hit: [
      param[0][0], // 1
      param[0][1], // 2
      param[0][2], // 3
      param[0][3], // 4 x 3
      param[0][6], // 5
    ],
  },
  charged: {
    dmg: param[0][7], // 1 x 3
    stamina: param[0][8],
  },
  plunge: {
    hit: [param[0][9], param[0][10], param[0][11]],
  },
  skill: {
    press: param[1][0],
    cd: param[1][1],
  },
  burst: {
    cutDmg: param[4][0],
    bloomDmg: param[4][1],
    duration: param[4][2],
    cd: param[4][3],
    cost: param[4][4],
  },
};

const ct = characterTemplate(10000002, data);
const talent = [
  ct.auto(0, [
    {
      text: ct.tr(`talent.0.field.0`),
    },
    {
      field: dm.normal.hit.map((value, index) => ({
        value,
        key: ct.tr(`talent.0.param.${index}`),
        unit: "%",
      })),
    },
    {
      text: ct.tr(`talent.0.field.1`),
    },
    {
      field: [
        { key: ct.tr("talent.0.param.5"), value: dm.charged.dmg, unit: "%" },
        { key: ct.tr("talent.0.param.6"), value: dm.charged.stamina },
      ],
    },
    {
      text: ct.tr(`talent.0.field.2`),
    },
    {
      field: dm.plunge.hit.map((value, index) => ({
        value,
        key: ct.tr(`talent.0.param.${index + 7}`),
        unit: "%",
      })),
    },
  ]),

  ct.talent("skill", 1, [
    {
      field: [
        { key: ct.tr("talent.1.param.0"), value: dm.skill.press, unit: "%" },
        { key: ct.tr("talent.1.param.1"), value: dm.skill.cd, unit: "s" },
      ],
    },
  ]),

  ct.talent("burst", 4, [
    {
      field: [
        {
          key: ct.tr("talent.4.param.0"),
          value: dm.burst.cutDmg,
          unit: "%",
          multi: 19,
        },
        { key: ct.tr("talent.4.param.1"), value: dm.burst.bloomDmg, unit: "%" },
        { key: ct.tr("talent.4.param.2"), value: dm.burst.duration, unit: "s" },
        { key: ct.tr("talent.4.param.3"), value: dm.burst.cd, unit: "s" },
        { key: ct.tr("talent.4.param.4"), value: dm.burst.cost },
      ],
    },
  ]),

  ct.passive("sprint", 2),
  ct.passive("passive1", 5),
  ct.passive("passive2", 6),
  ct.passive("passive3", 7),
];

const ayaka: ICharacterData = {
  ...data,
  namecardIcon: data.other.nameCard.icon,
  talent,
};

export default new Character(ayaka);
