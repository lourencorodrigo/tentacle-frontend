export default (env, request, errorHandler) => ({
  get: errorHandler(async () => {
    const req = await request.get(`${env.api_endpoint}/states`);
    return req.data;
  }),
  getCities: errorHandler(async idState => {
    const endpoint = `${env.api_endpoint}/states/${idState}/cities`;
    const req = await request.get(endpoint);
    return req.data;
  })
});
