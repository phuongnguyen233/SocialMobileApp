type ColorsType = {
  white: string;
  dark: string;
  mainColor: string;
  mainColor2: string;
  mainColor3: string;
  gray: string;
  violet: string;
  hoverText: string;
  pink: string;
  offNavyBlue: string;
  navyBlue: string;
  purple: string;
  offPurple: string;
  red: string;
  skyBlue: string;
  blue: string;
  pantonePurple: string;
  background: string;
  textColor: string;
  textColor2: string;
  blueGradiant: string;
  green: string;
  colorBG: string;
  colorBG1: string;
  colorBG2: string;
  white1: string;
  facebook: string;
  googleGradient: {
    gradient1: string;
    gradient2: string;
    gradient3: string;
  };
} & {
  [key: string]: any;
}

const Colors: ColorsType = {
  white: "#ffffff",
  dark: "#000000",
  mainColor: "#8F00FF",
  mainColor2: "#9b1ffa",
  mainColor3: "#9b1ffad9",
  gray: "#656565",
  violet: "#7E33E0",
  hoverText: "#E7E3EF",
  pink: "#FB2E86",
  offNavyBlue: "#3F509E",
  navyBlue: "#151875",
  purple: "#7E33E0",
  offPurple: "#9F63B5",
  red: "#FB2448",
  skyBlue: "#F2F5FF",
  blue: "#2F1AC4",
  pantonePurple: "#E0D3F5",
  background: "#F6F5FF",
  textColor: "#0D0E43",
  textColor2: "#8A8FB9",
  blueGradiant: "#18A0F2",
  green: "#08D15F",
  colorBG: "#a5f3fc",
  colorBG1: "#cffafe",
  colorBG2: "#ecfeff",
  white1: "#E8ECF4",
  facebook: "#4092FF",
  googleGradient: {
    gradient1: "linear-gradient(45deg, #4285F4, #0F9D58, #F4B400, #4285F4)",
    gradient2: "linear-gradient(45deg, #DB4437, #0F9D58, #F4B400, #0F9D58)",
    gradient3: "linear-gradient(45deg, #4285F4, #0F9D58, #F4B400, #DB4437)",
  },
}

export default Colors

