export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  label?: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  link?: string;
  demoLink?: string;
  tags: string[];
  type: 'university' | 'work' | 'personal' | 'archive';

  media?: ProjectMedia[];

  highlights?: string[];
};