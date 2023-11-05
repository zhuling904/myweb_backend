import aboutRouter from './api/about';
import webInfoRouter from './api/webInfo';
import worksRouter from './api/works';

export const API = {
  webInfo: webInfoRouter,
  works: worksRouter,
  about: aboutRouter,
};
