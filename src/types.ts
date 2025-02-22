export interface Activity {
  id: number;
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  category: string;
  thumbnail: string;
  difficulty: string;
}

export interface AgeValue {
  years: number;
  months: number;
}