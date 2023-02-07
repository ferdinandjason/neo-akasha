import Character, { characterTemplate, ICharacterData } from "../Character";
import data from "./data.json";
import param from "./param.json";

const dm = {
  normal: {
    hit: [
      param[0][0],
      param[0][1],
      param[0][2],
      param[0][3],
      param[0][4],
    ]
  },
  charged: {
    dmg: param[0][5],
    stamina: param[0][6],
  },
  plunge: {
    hit: [
      param[0][7],
      param[0][8],
      param[0][9],
    ]
  },
  skill: {
    dmg: param[1][0],
    stamina: param[1][1],
    duration: param[1][2],
    cd: param[1][3],
  },
  burst: {
    dmg: param[3][0],
    fieldDmg: param[3][1],
    fieldHealBase: param[3][2],
    fieldHealAdditional: param[3][3],
    continousHealBase: param[3][4],
    continousHealAdditional: param[3][5],
    cd: param[3][6],
    cost: param[3][7],
  }
}

const ct = characterTemplate(10000003, data)
const talent = [
  ct.auto(0, [
    {
      text: ct.tr('talent.0.field.0'),
    }, {
      field: dm.normal.hit.map((value, index) => ({
        value,
        key: ct.tr(`talent.0.param.${index}`),
        unit: "%"
      }))
    }, {
      text: ct.tr(`talent.0.field.1`),
    }, {
      field: [
        { key: ct.tr("talent.0.param.5"), value: dm.charged.dmg, unit: "%" },
        { key: ct.tr("talent.0.param.6"), value: dm.charged.stamina },
      ],
    }, {
      text: ct.tr(`talent.0.field.2`),
    }, {
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
        { key: ct.tr("talent.1.param.0"), value: dm.skill.dmg, unit: "%" },
        { key: ct.tr("talent.1.param.1"), value: dm.skill.stamina},
        { key: ct.tr("talent.1.param.2"), value: dm.skill.duration, unit: "s"},
        { key: ct.tr("talent.1.param.3"), value: dm.skill.cd, unit: "s" },
      ]
    }
  ]),

  ct.talent("burst", 3, [
    {
      field: [
        { key: ct.tr("talent.3.param.0"), value: dm.burst.dmg, unit: "%" },
        { key: ct.tr("talent.3.param.1"), value: dm.burst.fieldDmg, unit: "%" },
        { key: ct.tr("talent.3.param.2"), value: [], unit: "%", multiScale: [
         {
          value: dm.burst.fieldHealBase,
          base: "ATK",
          unit: "%"
         }, {
          value: dm.burst.fieldHealAdditional
         }
        ]},
        { key: ct.tr("talent.3.param.3"), value: [], unit: "%", multiScale: [
          {
            value: dm.burst.continousHealBase,
            base: "ATK",
            unit: "%"
           }, {
            value: dm.burst.continousHealAdditional
           }
        ]},
        { key: ct.tr("talent.3.param.4"), value: dm.burst.cd, unit: "s" },
        { key: ct.tr("talent.3.param.5"), value: dm.burst.cost},
      ],
    }
  ]),

  ct.passive("passive1", 4),
  ct.passive("passive2", 5),
  ct.passive("passive3", 6),
]

const jean: ICharacterData = {
  ...data,
  namecardIcon: data.other.nameCard.icon,
  talent
}

export default new Character(jean)
