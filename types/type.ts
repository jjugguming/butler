export type KakaoIdentityData = {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  preferred_username: string;
  provider_id: string;
  sub: string;
  user_name: string;
};

export type kakaoInfo = {
  imageUrl: string;
  nickname: string;
  customImage: boolean;
};

export type Profile = {
  id: string;
  nickname: string;
  createdAt: string;
  imageUrl: string;
  comment: string;
};

export type resetProfile = {
  id: string;
  nickname: string;
  imageUrl: string;
  comment: string;
  customImage: boolean;
};

export type Pet = {
  id: number;
  weight: number;
  gender: string;
  name: string;
  comment: string;
  breed: string;
  birth: string;
  imageUrl: string;
};

export type DiaryInfo = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  author: {
    id: string;
    imageUrl: string;
    nickname: string;
  };
};
