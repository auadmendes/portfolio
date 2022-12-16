

export interface IHero {
  _type: "pageInfo";
  id: string;
  name: string;
  address: string,
  backgroundInformation: string;
  email: string;
  role: string;
  phoneNumber: string;
  image: {
    url: string;
  };
  profilePicture: {
    url: string;
  };
  // socialIcon: {
  //   url: string;
  // }
}

export interface ISkillProps   {
  _type: "skill";
  id: string;
  skillImage: {
    url: string;
  };
  progress: number;
  title: string;
}

export interface ISocialProps {
  _type: "social",
  id: string;
  title: string;
  url: string;
}

export interface IExperienceProps {
  _type: "experience";
  id: string;
  jobTitle: string;
  isCurrentWorkingHere: boolean;
  company: string;
  dateStarted: string;
  dateEnded: string;
  companyImage: {
    url: string;
  }
  experiencePoints: [
   {
    id: string;
    point: string;
   }
  ]
  experienceSkills: [
    {
      id: string;
      skillImage: {
        id: string;
        url: string;
      }
    }
  ]
}

export interface IProjectProps {
  _type: "projects";
  id: string;
  title: string;
  image: {
    url: string;
  };
  linkToBuild: string;
  summary: string; 
  skills: [
    {
      id: string;
      skillImage: {
        url: string;
      }
    }
  ]
}