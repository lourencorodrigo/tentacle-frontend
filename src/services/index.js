import axios from 'axios';
import env from '../config/env';

import errorHandler from './errorHandler';

import login from './loginService';

const dependencies = [env, axios, errorHandler];

export const loginService = login(...dependencies);
