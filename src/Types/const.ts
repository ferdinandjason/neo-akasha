export const allCharacterKeys = [
  "Albedo",
  "Alhaitham",
  "Aloy",
  "Amber",
  "AratakiItto",
  "Barbara",
  "Beidou",
  "Bennett",
  "Candace",
  "Chongyun",
  "Collei",
  "Cyno",
  "Diluc",
  "Diona",
  "Dori",
  "Eula",
  "Faruzan",
  "Fischl",
  "Ganyu",
  "Gorou",
  "HuTao",
  "Jean",
  "KaedeharaKazuha",
  "Kaeya",
  "KamisatoAyaka",
  "KamisatoAyato",
  "Keqing",
  "Klee",
  "KujouSara",
  "KukiShinobu",
  "Layla",
  "Lisa",
  "Mona",
  "Nahida",
  "Nilou",
  "Ningguang",
  "Noelle",
  "Qiqi",
  "RaidenShogun",
  "Razor",
  "Rosaria",
  "SangonomiyaKokomi",
  "Sayu",
  "Shenhe",
  "ShikanoinHeizou",
  "Sucrose",
  "Tartaglia",
  "Thoma",
  "Tighnari",
  "Venti",
  "Wanderer",
  "Xiangling",
  "Xiao",
  "Xingqiu",
  "Xinyan",
  "YaeMiko",
  "Yanfei",
  "Yaoyao",
  "Yelan",
  "Yoimiya",
  "YunJin",
  "Zhongli",
] as const;

export const allCharacterIDs = [
  10000002, 10000003, 10000006, 10000014, 10000015, 10000016, 10000020,
  10000021, 10000022, 10000023, 10000024, 10000025, 10000026, 10000027,
  10000029, 10000030, 10000031, 10000032, 10000033, 10000034, 10000035,
  10000036, 10000037, 10000038, 10000039, 10000041, 10000042, 10000043,
  10000044, 10000045, 10000046, 10000047, 10000048, 10000049, 10000050,
  10000051, 10000052, 10000053, 10000054, 10000055, 10000056, 10000057,
  10000058, 10000059, 10000060, 10000062, 10000063, 10000064, 10000065,
  10000066, 10000067, 10000068, 10000069, 10000070, 10000071, 10000072,
  10000073, 10000074, 10000075, 10000076, 10000077, 10000078, 10000079,
  10000080,
];

export type CharacterKey = typeof allCharacterKeys[number];
export type CharacterID = typeof allCharacterIDs[number];