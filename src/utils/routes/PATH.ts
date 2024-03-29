const PATH = {
  URL: import.meta.env.VITE_API_BASE_URL,
  // Sign-up routes
  LOGIN: "/login",
  EASY_AUTH: "/login/easy-auth",
  SIGNUP: "/login/easy-auth/sign-up",
  INPUT: "/user-data-input",
  USER_IMAGE: "/user-data-input/user-image-input",

  //main routes
  HOME: "/home",
  LIKE: "/like",
  RECOMMEND: "/recommend",
  CHAT: "/chat",
  USER: "/user-setting",
  MODIFY: "/user-setting/user-information-modify",
  LIKE_YOU: "/user-setting/likeYou",
} as const;

Object.freeze(PATH);

export default PATH;
