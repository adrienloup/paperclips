import { createContext, Dispatch } from 'react';
import { Project } from './Project.type';
import { Action } from './Projects.action';

export const ProjectsContext = createContext<Project[]>([]);
export const ProjectsDispatchContext = createContext<Dispatch<Action>>(() => {});
