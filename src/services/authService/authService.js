export default (env, request, errorHandler) => ({
  login: errorHandler(async (email, password) => {
    const req = await request.post(`${env.api_endpoint}/login`, {
      email,
      password
    });
    const { accessToken } = req.data.data;
    sessionStorage.setItem('accessToken', accessToken);
    return req;
  })
});
