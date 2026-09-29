export interface Certification {
  id: string;
  name: string;
  provider: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "dataflair",
    name: "Python Training Program",
    provider: "Data Flair",
  },
];
