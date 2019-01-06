import { TOKEN_NAME } from '../../utils/constants';

export default (env, request, errorHandler) => ({
  login: errorHandler(async (email, password) => {
    const req = await request.post(`${env.api_endpoint}/login`, {
      email,
      password
    });
    const { accessToken } = req.data.data;
    sessionStorage.setItem(TOKEN_NAME, accessToken);
    return req.data;
  })
});

export const isUserLogged = () => !!sessionStorage.getItem(TOKEN_NAME);
