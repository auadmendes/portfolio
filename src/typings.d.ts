interface SanityBody {
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

interface IImage {
  _type: "image",
  asset: {
    _ref: string;
    _type: "reference"
  };
}

export interface IPageInfo extends SanityBody {
  _type: "pageInfo",
  address: string,
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: IImage;
  name: string;
  phoneNumber: string;
  profilePic: IImage;
}

export interface ITechnology extends SanityBody {
  _type: "skill";
  id: string;
  image: IImage;
  progress: number;
  title: string;
}

export interface ISkill extends SanityBody {
  _type: "skill";
  id: string;
  image: IImage;
  progress: number;
  title: string;
}

export interface IExperience extends SanityBody {
  _type: "experience";
  id: string;
  company: string;
  companyImage: IImage;
  dateStarted: string;
  dateEnded: string;
  isCurrentWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: ITechnology[];
}

export interface IProject extends SanityBody {
  _type: "projects";
  id: string;
  title: string;
  image: IImage;
  linkToBuild: string;
  summary: string; 
  technologies: ITechnology[];
}

export interface ISocial extends SanityBody {
  _type: "social",
  id: string;
  title: string;
  url: string;
}