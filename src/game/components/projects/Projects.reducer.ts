import { Project } from './Project.type';
import { Action } from './Projects.action';

export const ProjectsReducer = (projects: Project[], action: Action): Project[] => {
  switch (action.type) {
    case 'ADDED':
      const exists = projects.some((project) => project.id === action.id);
      if (exists) {
        return projects;
      }
      return [
        ...projects,
        {
          id: action.id,
          active: true,
        },
      ];
    case 'DELETED':
      return projects.filter((project) => project.id !== action.id);
    case 'DISABLED':
      return projects.map((project) => {
        if (project.id === action.id) {
          return { ...project, active: false };
        } else {
          return project;
        }
      });
    default:
      return projects;
  }
};
