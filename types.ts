export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  fullBio?: string;
  skills?: string[];
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  year: string;
  status: 'Live' | 'Beta' | 'Concept';
  demoType?: 'video' | '3d' | 'ai';
}

export interface NavItem {
  label: string;
  href: string;
}