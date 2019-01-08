import axios from 'axios';
import env from '../config/env';

import errorHandler from './errorHandler';

import auth from './authService';
import state from './stateService';

const dependencies = [env, axios, errorHandler];

export const loginService = auth(...dependencies);
export const stateService = state(...dependencies);
