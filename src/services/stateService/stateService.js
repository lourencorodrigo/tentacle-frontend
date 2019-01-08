export default (env, request, errorHandler) => ({
  get: errorHandler(async () => {
    const req = await request.get(`${env.api_endpoint}/states`);
    return req.data;
  })
});
