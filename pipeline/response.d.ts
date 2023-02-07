type AmbrAvatarDataConstellationResponse = {
  name: string;
  description: string;
  icon: string;
};

type AmbrAvatarDataTalentPromoteResponse = {
  level: number;
  description: [string];
  params: [string];
};

type AmbrAvatarDataTalentResponse = {
  type: number;
  name: string;
  description: string;
  icon: string;
  promote?: Map<string, AmbrAvatarDataTalentPromoteResponse>;
  cooldown: number;
  cost: number;
};

type AmbrAvatarDataOtherNameCardResponse = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type AmbrAvatarDataOtherResponse = {
  nameCard: AmbrAvatarDataOtherNameCardResponse;
};

type AmbrAvatarDataResponse = {
  id: string;
  rank: 1 | 2 | 3 | 4 | 5;
  name: string;
  weaponType: string;
  icon: string;
  route: string;
  other: AmbrAvatarDataOtherResponse;
  talent: Map<string, AmbrAvatarDataTalentResponse>;
  constellation: Map<string, AmbrAvatarDataConstellationResponse>;
};

export type AmbrAvatarResponse = {
  response: string;
  data: AmbrAvatarDataResponse;
};
