import axios from 'axios';
import env from '../config/env';

import errorHandler from './errorHandler';

import auth from './authService';

const dependencies = [env, axios, errorHandler];

export const loginService = auth(...dependencies);
