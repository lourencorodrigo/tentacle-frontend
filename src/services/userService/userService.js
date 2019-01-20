import { TOKEN_NAME } from '../../utils/constants';

export default (env, request, errorHandler) => ({
  create: errorHandler(async user => {
    const req = await request.post(`${env.api_endpoint}/users`, {
      ...user
    });
    const { accessToken } = req.data.data;
    sessionStorage.setItem(TOKEN_NAME, accessToken);
    return req.data;
  })
});
