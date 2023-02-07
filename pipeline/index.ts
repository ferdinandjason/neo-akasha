import axios, { AxiosResponse } from "axios";
import { characterLocalizationDump, characterDump } from "./character";
import { AmbrAvatarResponse } from "./response";

export const characterIDMap = {
  10000002: "Kamisato Ayaka",
  10000003: "Jean",
  10000006: "Lisa",
  10000014: "Barbara",
  10000015: "Kaeya",
  10000016: "Diluc",
  10000020: "Razor",
  10000021: "Amber",
  10000022: "Venti",
  10000023: "Xiangling",
  10000024: "Beidou",
  10000025: "Xingqiu",
  10000026: "Xiao",
  10000027: "Ningguang",
  10000029: "Klee",
  10000030: "Zhongli",
  10000031: "Fischl",
  10000032: "Bennett",
  10000033: "Tartaglia",
  10000034: "Noelle",
  10000035: "Qiqi",
  10000036: "Chongyun",
  10000037: "Ganyu",
  10000038: "Albedo",
  10000039: "Diona",
  10000041: "Mona",
  10000042: "Keqing",
  10000043: "Sucrose",
  10000044: "Xinyan",
  10000045: "Rosaria",
  10000046: "Hu Tao",
  10000047: "Kaedehara Kazuha",
  10000048: "Yanfei",
  10000049: "Yoimiya",
  10000050: "Thoma",
  10000051: "Eula",
  10000052: "Raiden Shogun",
  10000053: "Sayu",
  10000054: "Sangonomiya Kokomi",
  10000055: "Gorou",
  10000056: "Kujou Sara",
  10000057: "Arataki Itto",
  10000058: "Yae Miko",
  10000059: "Shikanoin Heizou",
  10000060: "Yelan",
  10000062: "Aloy",
  10000063: "Shenhe",
  10000064: "Yun Jin",
  10000065: "Kuki Shinobu",
  10000066: "Kamisato Ayato",
  10000067: "Collei",
  10000068: "Dori",
  10000069: "Tighnari",
  10000070: "Nilou",
  10000071: "Cyno",
  10000072: "Candace",
  10000073: "Nahida",
  10000074: "Layla",
  10000075: "Wanderer",
  10000076: "Faruzan",
  10000077: "Yaoyao",
  10000078: "Alhaitham",
  10000079: "Dehya",
  10000080: "Mika",
};

const requests: Promise<AxiosResponse<AmbrAvatarResponse>>[] = [];
Object.keys(characterIDMap).forEach((id) => {
  requests.push(
    axios.get<AmbrAvatarResponse>(`/v2/en/avatar/${id}`, {
      baseURL: "https://api.ambr.top/",
    })
  );
});

Promise.all(requests).then((responses) => {
  responses.forEach((response: AxiosResponse<AmbrAvatarResponse>) => {
    characterDump(response.data)
    characterLocalizationDump('en', response.data)
  });
});

const requestsID: Promise<AxiosResponse<AmbrAvatarResponse>>[] = [];
Object.keys(characterIDMap).forEach((id) => {
  requestsID.push(
    axios.get<AmbrAvatarResponse>(`/v2/id/avatar/${id}`, {
      baseURL: "https://api.ambr.top/",
    })
  );
});

Promise.all(requestsID).then((responses) => {
  responses.forEach((response: AxiosResponse<AmbrAvatarResponse>) => {
    characterLocalizationDump('id', response.data)
  });
});
