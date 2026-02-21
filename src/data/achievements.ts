import { Award, Shield } from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  link: string;
  iconName: string; // We'll map this to actual icons in the component
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Complete Web Development Course",
    organization: "Programing Hero",
    date: "2025",
    link: "https://drive.google.com/file/d/1nz3PQgMvlqrAY2w4rkIeatCue5ARwlOE/view?usp=sharing",
    iconName: "Award",
  },
  {
    id: "2",
    title: "Black Belt",
    organization: "Compelete PH Course with consistency Award",
    date: "2026",
    link: "https://res.cloudinary.com/dynxnpj21/image/upload/v1771635844/naimdrive6_gmail.com_a6dymj.jpg",
    iconName: "Shield",
  },
];
