export interface Connection {
  type: string;
  name: string;
  url: string;
  subtext?: string;
}

export interface ProfileData {
  displayName: string;
  avatar: string; 
  banner: string; 
  aboutMe: string;
  connections: Connection[];
  email: string;
}

export const profileConfig: ProfileData = {
  displayName: "vermilion10",
  avatar: import.meta.env.BASE_URL + "assets/aimisi.gif",
  banner: import.meta.env.BASE_URL + "assets/xigelika_kecubung.mp4",
  aboutMe: "Vue kalo jadi cewek udah gua nikahin ",
  connections: [
    { type: "github", name: "vermilion10", url: "https://github.com/vermilion10" },
    { type: "steam", name: "giuseppemonsieur33", url: "https://steamcommunity.com/profiles/76561198783299953", subtext: "Member since Feb 31, 3012\n0 Games" },
    { type: "facebook", name: "Arutimeto Supekutakuru", url: "https://www.facebook.com/arutimeto" }
  ],
  email: "vermilion10@proton.me",
};